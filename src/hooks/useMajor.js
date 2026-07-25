import { useEffect, useState } from 'react';
import { majorCache } from '@/utils/apiCache';
import { getResponseMessage } from '@/utils/getResponseMessage';
import { getLanguage } from '@/services/languageService';
import { getService } from '@/services/apiService';
import { endpoints } from '@/services/endpoints';

export const useMajor = (facultiesId) => {
    const [majors, setMajor] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const currentLanguage = getLanguage();

    // ✅ Fix 1: composite cache key
    const cacheKey = `${currentLanguage}_${facultiesId}`;

    useEffect(() => {
        if (facultiesId) fetchMajors(facultiesId);
    }, [currentLanguage, facultiesId]);

    const fetchMajors = async (facultiesId) => {
        if (majorCache[cacheKey]) {
            setMajor(majorCache[cacheKey]);
            setLoading(false);
            return;
        }
        setLoading(true);
        try {
            const res = await getService(endpoints.major, {
                faculties_id: facultiesId
            });
            if (res.code === 200) {
                majorCache[cacheKey] = res.data;
                setMajor(res.data);
            } else {
                setMajor([]);
                setError(getResponseMessage({ response: res }));
            }
        } catch (error) {
            setError(getResponseMessage(error));
            setMajor([]);
        } finally {
            setLoading(false);
        }
    };

    return { majors, loading, error, refetch: fetchMajors };
};