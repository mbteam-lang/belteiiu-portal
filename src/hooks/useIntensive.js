
import { useEffect, useState } from 'react';
import { intensiveCache } from '@/utils/apiCache';
import { getResponseMessage } from '@/utils/getResponseMessage';
import { getLanguage } from '@/services/languageService';
import { getService } from '@/services/apiService';
import { endpoints } from '@/services/endpoints';

export const useIntensive = () => {
    const [intensiveData, setIntensiveData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const currentLanguage = getLanguage();
    
    const fetchIntensive = async () => {
        setLoading(true);
        try {
            const res = await getService(endpoints.intensives);
            if(res.code === 200) {
                intensiveCache[currentLanguage] = res;
                setIntensiveData(res.data);
            } else {
                setIntensiveData([]);
                setError(
                    getResponseMessage({response: res})
                );
            }
            setLoading(false);
        } catch (error) {
            setError(getResponseMessage(error));
            setIntensiveData([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchIntensive();
    }, [currentLanguage]);

    return {
        intensiveData,
        loading,
        error,
        refetch: fetchIntensive,
    };
};