import { useEffect, useState } from 'react';
import { getService } from '@/services/apiService';
import { getResponseMessage } from '@/utils/getResponseMessage';
import { getLanguage } from '@/services/languageService';
import { endpoints } from '@/services/endpoints';

export const useCollaboration = (typeID) => {
    const [collaboration, setCollaboration] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const currentLanguage = getLanguage();
    
    const fetchCollaboration = async (id) => {
        setLoading(true);
        setError(null);
        try {
            const res = await getService(endpoints.collaboration, {
                collaboration_type_id: id
            });
            if (res.code === 200) {
                setCollaboration(res.data || []);
            } else {
                setCollaboration([]);
                setError(getResponseMessage({ response: res }));
            }
        } catch (err) {
            setCollaboration([]);
            setError(getResponseMessage(err));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!typeID) return;
        fetchCollaboration(typeID);
    }, [typeID, currentLanguage]);

    const refetch = () => {
        if (typeID) fetchCollaboration(typeID);
    };

    return {
        collaboration,
        loading,
        error,
        refetch,
    };
};