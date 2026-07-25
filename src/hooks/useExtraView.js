import { useEffect, useState } from 'react';
import { extraViewCache } from '@/utils/apiCache';
import { getResponseMessage } from '@/utils/getResponseMessage';
import { getLanguage } from '@/services/languageService';
import { getService } from '@/services/apiService';
import { endpoints } from '@/services/endpoints';

export const useExtraView = (extraListID) => {
    const [extraView, setExtraView] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const currentLanguage = getLanguage();
    
    const cacheKey = `${currentLanguage}_${extraListID}`;
    useEffect(() => {
        if (extraListID) fetchExtraView(extraListID);
    }, [currentLanguage, extraListID]);

    const fetchExtraView = async (extraListID) => {
        if (extraViewCache[cacheKey]) {
            setExtraView(extraViewCache[cacheKey]);
            setLoading(false);
            return;
        }
        setLoading(true);
        try {
            const res = await getService(endpoints.viewDetail, {
                extras_list_id: extraListID
            });
            if (res.code === 200) {
                extraViewCache[cacheKey] = res.data;
                setExtraView(res.data);
                setError(null);
            } else {
                setExtraView([]);
                setError(res.message);
            }
        } catch (error) {
            setExtraView([]);
            setError(getResponseMessage(error));
        } finally {
            setLoading(false);
        }
    };

    return { 
        extraView, 
        loading, 
        error, 
        refetch: fetchExtraView 
    };
};