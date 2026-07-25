
import { useEffect, useState } from 'react';
import { searchCache } from '@/utils/apiCache';
import { getResponseMessage } from '@/utils/getResponseMessage';
import { getLanguage } from '@/services/languageService';
import { getService } from '@/services/apiService';
import { endpoints } from '@/services/endpoints';

export const useSearch = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const currentLanguage = getLanguage();
    
    const fetchSearchResults = async () => {
        setLoading(true);
        try {
            const res = await getService(endpoints.search);
            if(res.code === 200) {
                searchCache[currentLanguage] = res;
                setSearchResults(res.data);
            } else {
                setSearchResults([]);
                setError(
                    getResponseMessage({response: res})
                );
            }
            setLoading(false);
        } catch (error) {
            setError(getResponseMessage(error));
            setSearchResults([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSearchResults();
    }, [currentLanguage]);

    return {
        searchResults,
        loading,
        error,
        refetch: fetchSearchResults,
    };
};