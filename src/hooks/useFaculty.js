
import { useEffect, useState } from 'react';
import { facultyCache, countCache } from '@/utils/apiCache';
import { getResponseMessage } from '@/utils/getResponseMessage';
import { getLanguage } from '@/services/languageService';
import { getService } from '@/services/apiService';
import { endpoints } from '@/services/endpoints';

export const useFaculty = (degreesId) => {
    const [facultiesData, setFacultyData] = useState([]);
    const [counts, setCounts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const currentLanguage = getLanguage();
    
    useEffect(() => {
        fetchFaculties(degreesId);
        fetchCount();
    }, [currentLanguage, degreesId]);

    // Fix cache key to include degreesId
    const fetchFaculties = async (degreesId) => {
        const cacheKey = `${currentLanguage}_${degreesId}`;
        if (facultyCache[cacheKey]) {
            setFacultyData(facultyCache[cacheKey]);
            setLoading(false);
            return;
        }
        setLoading(true);
        try {
            const res = await getService(endpoints.faculty, { degrees_id: degreesId });
            if (res.code === 200) {
                facultyCache[cacheKey] = res;
                setFacultyData(res);
            } else {
                setFacultyData([]);
                setError(getResponseMessage({ response: res }));
            }
        } catch (error) {
            setError(getResponseMessage(error));
            setFacultyData([]);
        } finally {
            setLoading(false);
        }
    };

    const fetchCount = async () => {
        setLoading(true);
        try {
            const res = await getService(endpoints.countAll);
            if(res.code === 200) {
                countCache[currentLanguage] = res;
                setCounts(res.data);
            } else {
                setCounts([]);
                setError(
                    getResponseMessage({response: res})
                );
            }
            setLoading(false);
        } catch (error) {
            setError(getResponseMessage(error));
            setCounts([]);
        } finally {
            setLoading(false);
        }
    };

    return {
        facultiesData,
        counts,
        loading,
        error,
        refetch: fetchFaculties,
    };
};