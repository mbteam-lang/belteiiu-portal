import { useEffect, useState } from 'react';
import { collaborationTypeCache} from '@/utils/apiCache';
import { getResponseMessage } from '@/utils/getResponseMessage';
import { getLanguage } from '@/services/languageService';
import { getService } from '@/services/apiService';
import { endpoints } from '@/services/endpoints';

export const useCollaboration = () => {
    const [typeList, setCollaborationType] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const currentLanguage = getLanguage();

    useEffect(() => {
        fetchCollaborationType();
    }, [currentLanguage]);


    // get List
    const fetchCollaborationType = async () => {
        setLoading(true);
        try {
            const res = await getService(endpoints.collaborationType);
            if(res.code === 200) {
                collaborationTypeCache[currentLanguage] = res.data;
                setCollaborationType(res.data);
            } else {
                setCollaborationType([]);
                setError(
                    getResponseMessage({response: res})
                );
            }
            setLoading(false);
        } catch (error) {
            setError(getResponseMessage(error));
            setCollaborationType([]);
        } finally {
            setLoading(false);
        }
    };

    return {
        typeList,
        loading,
        error,
        refetch: fetchCollaborationType,
    };
};