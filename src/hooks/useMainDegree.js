
import { useEffect, useState } from 'react';
import { mainDegreeCache } from '@/utils/apiCache';
import { getResponseMessage } from '@/utils/getResponseMessage';
import { getLanguage } from '@/services/languageService';
import { endpoints } from '@/services/endpoints';
import { getService } from '@/services/apiService';

export const useMainDegree = () => {
    const [mainDegree, setMainDegree] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const currentLanguage = getLanguage();
    
    const fetchMainDegree = async () => {
        setLoading(true);
        try {
            const res = await getService(endpoints.mainDegree);

            if(res.code === 200) {
                mainDegreeCache[currentLanguage] = res;
                setMainDegree(res.data);
            } else {
                setMainDegree([]);
                setError(
                    getResponseMessage({response: res})
                );
            }
            setLoading(false);
        } catch (error) {
            setError(getResponseMessage(error));
            setMainDegree([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMainDegree();
    }, [currentLanguage]);

    return {
        mainDegree,
        loading,
        error,
        refetch: fetchMainDegree,
    };
};