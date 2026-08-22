
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
        if (academicCategoriesCache[currentLanguage] && Array.isArray(academicCategoriesCache[currentLanguage])) {
            setAcademicCategories(academicCategoriesCache[currentLanguage]);
            setLoading(false);
            return;
        }
        setLoading(true);
        try {
            const res = await getService(endpoints.academicCategories);
            if(res.code === 200 && Array.isArray(res.data)) {
                academicCategoriesCache[currentLanguage] = res.data;
                setAcademicCategories(res.data);
            } else {
                setAcademicCategories([]);
                setError(
                    getResponseMessage({response: res})
                );
            }
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
        academicCategories: Array.isArray(academicCategories) ? academicCategories : [],
        loading,
        error,
        refetch: fetchAdmission,
    };
};