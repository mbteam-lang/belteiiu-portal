
import { useEffect, useState } from 'react';
import { degreeCache } from '@/utils/apiCache';
import { getResponseMessage } from '@/utils/getResponseMessage';
import { getLanguage } from '@/services/languageService';
import { getService } from '@/services/apiService';
import { endpoints } from '@/services/endpoints';

export const useDegree = () => {
    const [degree, setDegree] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const currentLanguage = getLanguage();
    
    const fetchDegree = async () => {
        setLoading(true);
        try {
            const res = await getService(endpoints.degrees);
            if(res.code === 200) {
                degreeCache[currentLanguage] = res;
                setDegree(res.data);
            } else {
                setDegree([]);
                setError(
                    getResponseMessage({response: res})
                );
            }
            setLoading(false);
        } catch (error) {
            setError(getResponseMessage(error));
            setDegree([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDegree();
    }, [currentLanguage]);

    return {
        degree,
        loading,
        error,
        refetch: fetchDegree,
    };
};