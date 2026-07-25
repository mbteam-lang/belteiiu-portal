
import { useEffect, useState } from 'react';
import { admissionCache } from '@/utils/apiCache';
import { getResponseMessage } from '@/utils/getResponseMessage';
import { getLanguage } from '@/services/languageService';
import { getService } from '@/services/apiService';
import { endpoints } from '@/services/endpoints';

export const useAdmission = () => {
    const [admission, setAdmission] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const currentLanguage = getLanguage();
    
    const fetchAdmission = async () => {
        setLoading(true);
        try {
            const res = await getService(endpoints.admission);
            if(res.code === 200) {
                admissionCache[currentLanguage] = res;
                setAdmission(res.data);
            } else {
                setAdmission([]);
                setError(
                    getResponseMessage({response: res})
                );
            }
            setLoading(false);
        } catch (error) {
            setError(getResponseMessage(error));
            setAdmission([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAdmission();
    }, [currentLanguage]);

    return {
        admission,
        loading,
        error,
        refetch: fetchAdmission,
    };
};