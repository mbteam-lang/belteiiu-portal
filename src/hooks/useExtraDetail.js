import { useEffect, useState } from 'react';
import { extraDetailCache } from '@/utils/apiCache';
import { getResponseMessage } from '@/utils/getResponseMessage';
import { getLanguage } from '@/services/languageService';
import { getService } from '@/services/apiService';
import { endpoints } from '@/services/endpoints';

export const useExtraDetail = (extraListID) => {
    const [extraDetail, setExtraDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showView, setShowView] = useState(false);
    const [error, setError] = useState(null);
    const currentLanguage = getLanguage();

    // ✅ Fix 1: composite cache key
    const cacheKey = `${currentLanguage}_${extraListID}`;

    useEffect(() => {
        if (extraListID) fetchExtraDetail(extraListID);
    }, [currentLanguage, extraListID]);

    const fetchExtraDetail = async (extraListID) => {
        if (extraDetailCache[cacheKey]) {
            setExtraDetail(extraDetailCache[cacheKey]);
            setLoading(false);
            return;
        }
        setLoading(true);
        try {
            const res = await getService(endpoints.extraDetail, {
                extras_list_id: extraListID
            });
            if (res.code === 200) {
                extraDetailCache[cacheKey] = res.data;
                setExtraDetail(res.data);
                setError(null);
            }else if (res.code === 404) {
                setShowView(true);
            } else {
                setExtraDetail([]);
                setError(res.message);
            }
        } catch (error) {
            setExtraDetail([]);
            setError(getResponseMessage(error));
        } finally {
            setLoading(false);
        }
    };

    return { extraDetail, showView, loading, error, refetch: fetchExtraDetail };
};