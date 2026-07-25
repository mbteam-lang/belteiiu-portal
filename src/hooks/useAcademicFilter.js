import { useEffect, useState } from 'react';
import { academicFilterCache } from '@/utils/apiCache';
import { getLanguage } from '@/services/languageService';
import { getService } from '@/services/apiService';
import { endpoints } from '@/services/endpoints';

export const useAcademicFilter = (facultyID) => {
    const [filters, setFilters] = useState({ major: [], year: [] });
    const [loading, setLoading] = useState(true);
    const currentLanguage = getLanguage();
    const cacheKey = `filter_${currentLanguage}_${facultyID}`;

    useEffect(() => {
        if (facultyID) fetchFilter();
    }, [currentLanguage, facultyID]);

    const fetchFilter = async () => {
        if (academicFilterCache[cacheKey]) {
            setFilters(academicFilterCache[cacheKey]);
            return;
        }
        setLoading(true);
        try {
            const res = await getService(endpoints.academicFilters, { faculty_id: facultyID });
            if (res.success) {
                academicFilterCache[cacheKey] = res.data;
                setFilters(res.data);
            }
        } catch (err) {
            console.error('Error fetching filters:', err);
        } finally {
            setLoading(false);
        }
    };

    return { filters, loading };
};