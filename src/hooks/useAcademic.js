
import { useEffect, useState } from 'react';
import { academicCategoriesCache } from '@/utils/apiCache';
import { getResponseMessage } from '@/utils/getResponseMessage';
import { getLanguage } from '@/services/languageService';
import { getService } from '@/services/apiService';
import { endpoints } from '@/services/endpoints';

export const useAcademicCategories = () => {
    const [academicCategories, setAcademicCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const currentLanguage = getLanguage();
    
    const fetchAdmission = async () => {
        setLoading(true);
        try {
            const res = await getService(endpoints.academicCategories);
            if(res.code === 200) {
                academicCategoriesCache[currentLanguage] = res;
                setAcademicCategories(res.data);
            } else {
                setAcademicCategories([]);
                setError(
                    getResponseMessage({response: res})
                );
            }
            setLoading(false);
        } catch (error) {
            setError(getResponseMessage(error));
            setAcademicCategories([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAdmission();
    }, [currentLanguage]);

    return {
        academicCategories,
        loading,
        error,
        refetch: fetchAdmission,
    };
};