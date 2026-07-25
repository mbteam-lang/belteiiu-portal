
import { useEffect, useState } from 'react';
import { worldWideElibraryCache } from '@/utils/apiCache';
import { getResponseMessage } from '@/utils/getResponseMessage';
import { getLanguage } from '@/services/languageService';
import { endpoints } from '@/services/endpoints';
import { getService } from '@/services/apiService';

export const useWorldWideELibrary = () => {
    const [worldWideElibrary, setWorldWideElibrary] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const currentLanguage = getLanguage();
    
    const fetchWorldWideElibrary = async () => {
        setLoading(true);
        try {
            const res = await getService(endpoints.worldwideElibrary);
            if(res.code === 200) {
                worldWideElibraryCache[currentLanguage] = res;
                setWorldWideElibrary(res.data);
            } else {
                setWorldWideElibrary([]);
                setError(
                    getResponseMessage({response: res})
                );
            }
            setLoading(false);
        } catch (error) {
            setError(getResponseMessage(error));
            setWorldWideElibrary([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWorldWideElibrary();
    }, [currentLanguage]);

    return {
        worldWideElibrary,
        loading,
        error,
        refetch: fetchWorldWideElibrary,
    };
};