
import { useEffect, useState } from 'react';
import { extraProgramCache } from '@/utils/apiCache';
import { getResponseMessage } from '@/utils/getResponseMessage';
import { getLanguage } from '@/services/languageService';
import { getService } from '@/services/apiService';
import { endpoints } from '@/services/endpoints';

export const useExtraProgram = () => {
    const [extraProgram, setExtraProgram] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const currentLanguage = getLanguage();
    
    const fetchExtraProgram = async () => {
        setLoading(true);
        try {
            const res = await getService(endpoints.mainExtra);
            if(res.code === 200) {
                extraProgramCache[currentLanguage] = res;
                setExtraProgram(res.data);
            } else {
                setExtraProgram([]);
                setError(
                    getResponseMessage({response: res})
                );
            }
            setLoading(false);
        } catch (error) {
            setError(getResponseMessage(error));
            setExtraProgram([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchExtraProgram();
    }, [currentLanguage]);

    return {
        extraProgram,
        loading,
        error,
        // refetch: fetchExtraProgram,
    };
};