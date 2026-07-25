import { useEffect, useState } from 'react';
import { extraViewDetailCache } from '@/utils/apiCache';
import { getResponseMessage } from '@/utils/getResponseMessage';
import { getLanguage } from '@/services/languageService';
import { getService } from '@/services/apiService';
import { endpoints } from '@/services/endpoints';

export const useExtraViewDetail = (extraDetailID) => {
    const [extraViewDetail, setExtraViewDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const currentLanguage = getLanguage();
    
    const cacheKey = `${currentLanguage}_${extraDetailID}`;
    useEffect(() => {
        if (extraDetailID) fetchExtraViewDetail(extraDetailID);
    }, [currentLanguage, extraDetailID]);

    const fetchExtraViewDetail = async (extraDetailID) => {
        if (extraViewDetailCache[cacheKey]) {
            setExtraViewDetail(extraViewDetailCache[cacheKey]);
            setLoading(false);
            return;
        }
        setLoading(true);
        try {
            const res = await getService(endpoints.viewExtraDetail, {
                extras_detail_id: extraDetailID
            });
            if (res.code === 200) {
                extraViewDetailCache[cacheKey] = res.data;
                setExtraViewDetail(res.data);
                setError(null);
            } else {
                setExtraViewDetail([]);
                setError(res.message);
            }
        } catch (error) {
            setExtraViewDetail([]);
            setError(getResponseMessage(error));
        } finally {
            setLoading(false);
        }
    };

    return { extraViewDetail, loading, error, refetch: fetchExtraViewDetail };
};