import { useEffect, useState, useCallback, useRef } from 'react';
import { facultyCache, countCache } from '@/utils/cache';
import { getResponseMessage } from '@/utils/getResponseMessage';
import { useLanguage } from '@/hooks/useLanguage';
import { getService } from '@/services/apiService';
import { endpoints } from '@/services/endpoints';

export const useFaculty = (degreesId) => {
    const [facultiesData, setFacultyData] = useState([]);
    const [counts, setCounts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { lang } = useLanguage();
    const abortRef = useRef(null);

    const fetchFaculties = useCallback(async (dId, signal = null) => {
        const targetId = dId || degreesId;
        const cacheKey = `${lang}_${targetId}`;
        if (facultyCache[cacheKey]) {
            setFacultyData(facultyCache[cacheKey]);
            setLoading(false);
            return;
        }
        setLoading(true);
        try {
            const res = await getService(endpoints.faculty, { degrees_id: targetId }, {}, signal);
            if (res.success && res.code === 200) {
                facultyCache[cacheKey] = res;
                setFacultyData(res);
            } else {
                setFacultyData([]);
                setError(getResponseMessage({ response: res }));
            }
        } catch (err) {
            if (err.name !== 'AbortError') {
                setError(getResponseMessage(err));
                setFacultyData([]);
            }
        } finally {
            setLoading(false);
        }
    }, [lang, degreesId]);

    const fetchCount = useCallback(async (signal = null) => {
        if (countCache[lang]) {
            setCounts(countCache[lang].data || countCache[lang]);
            return;
        }
        try {
            const res = await getService(endpoints.countAll, {}, {}, signal);
            if (res.success && res.code === 200) {
                countCache[lang] = res;
                setCounts(res.data);
            } else {
                setCounts([]);
            }
        } catch (err) {
            if (err.name !== 'AbortError') {
                setCounts([]);
            }
        }
    }, [lang]);

    useEffect(() => {
        if (abortRef.current) abortRef.current.abort();
        const controller = new AbortController();
        abortRef.current = controller;

        fetchFaculties(degreesId, controller.signal);
        fetchCount(controller.signal);

        return () => controller.abort();
    }, [lang, degreesId, fetchFaculties, fetchCount]);

    return {
        facultiesData,
        counts,
        loading,
        error,
        refetch: fetchFaculties,
    };
};