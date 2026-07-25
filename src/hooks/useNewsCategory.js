
import { useEffect, useState } from 'react';
import { categoryCache } from '@/utils/apiCache';
import { getResponseMessage } from '@/utils/getResponseMessage';
import { getLanguage } from '@/services/languageService';
import { getService } from '@/services/apiService';
import { endpoints } from '@/services/endpoints';

export const useCategory = () => {
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const currentLanguage = getLanguage();
    
    const fetchCategory = async () => {
        setLoading(true);
        try {
            const res = await getService(endpoints.categories);
            if(res.code === 200) {
                categoryCache[currentLanguage] = res;
                setCategory(res.data);
            } else {
                setCategory([]);
                setError(
                    getResponseMessage({response: res})
                );
            }
            setLoading(false);
        } catch (error) {
            setError(getResponseMessage(error));
            setCategory([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategory();
    }, [currentLanguage]);

    return {
        category,
        loading,
        error,
        refetch: fetchCategory,
    };
};