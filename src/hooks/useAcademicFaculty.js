import { useEffect, useState } from 'react';
import { academicFacultyCache } from '@/utils/apiCache';
import { getResponseMessage } from '@/utils/getResponseMessage';
import { getLanguage } from '@/services/languageService';
import { getService } from '@/services/apiService';
import { endpoints } from '@/services/endpoints';

export const useAcademicFaculty = (cateogryID) => {
    const [academicFaculty, setAcademicFaculty] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const currentLanguage = getLanguage();

    // ✅ Fix 1: composite cache key
    const cacheKey = `${currentLanguage}_${cateogryID}`;

    useEffect(() => {
        if (cateogryID) fetchMajors(cateogryID);
    }, [currentLanguage, cateogryID]);

    const fetchMajors = async (cateogryID) => {
        if (academicFacultyCache[cacheKey]) {
            setAcademicFaculty(academicFacultyCache[cacheKey]);
            setLoading(false);
            return;
        }
        setLoading(true);
        try {
            const res = await getService(endpoints.academicFaculties, { academic_categories: cateogryID });
            if (res.code === 200) {
                academicFacultyCache[cacheKey] = res.data;
                setAcademicFaculty(res.data);
            } else {
                setAcademicFaculty([]);
                setError(getResponseMessage({ response: res }));
            }
        } catch (error) {
            setError(getResponseMessage(error));
            setAcademicFaculty([]);
        } finally {
            setLoading(false);
        }
    };

    return { academicFaculty, loading, error, refetch: fetchMajors };
};