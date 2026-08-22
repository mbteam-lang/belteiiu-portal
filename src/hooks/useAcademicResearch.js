import { useEffect, useRef, useState } from 'react';
import { academicResearchCache } from '@/utils/apiCache';
import { getResponseMessage } from '@/utils/getResponseMessage';
import { getLanguage } from '@/services/languageService';
import { getService } from '@/services/apiService';
import { endpoints } from '@/services/endpoints';

export const useAcademicResearch = (facultyID) => {
    const [academicResearch, setAcademicResearch] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const currentLanguage = getLanguage();
    const hasFetched = useRef(false);
    const cacheKey = `${currentLanguage}_${facultyID}`;

    const fetchAcademicResearch = async (params = {}) => {
        if (!facultyID) return;
        const hasFilters = Object.values(params).some(v => v !== "" && v !== null && v !== undefined);
        if (!hasFilters && academicResearchCache[cacheKey] && Array.isArray(academicResearchCache[cacheKey])) {
            setAcademicResearch(academicResearchCache[cacheKey]);
            return;
        }
        setLoading(true);
        setError(null);

        try {
            const cleanParams = Object.fromEntries(
                Object.entries(params).filter(([_, v]) => v !== "" && v !== null && v !== undefined)
            );

            const res = await getService(endpoints.academicResearches, {
                faculty_id: facultyID,
                ...cleanParams,
            });
            if (res.code === 200 && Array.isArray(res.data) && res.data.length > 0) {
                if (!hasFilters) {
                    academicResearchCache[cacheKey] = res.data;
                }
                setAcademicResearch(res.data);
                hasFetched.current = true;
            } else if (res.code === 200) {
                setAcademicResearch([]);
            } else {
                setAcademicResearch([]);
                setError(getResponseMessage({ response: res }));
            }
        } catch (err) {
            setError(getResponseMessage(err));
            setAcademicResearch([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (facultyID) {
            hasFetched.current = false;
            fetchAcademicResearch();
        }
    }, [currentLanguage, facultyID]);

    return { 
        academicResearch: Array.isArray(academicResearch) ? academicResearch : [], 
        loading, 
        error, 
        refetch: fetchAcademicResearch 
    };
};