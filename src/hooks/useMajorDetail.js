// hooks/useMajorDetail.js
import { useEffect, useState } from 'react';
import { getService } from '@/services/apiService';
import { endpoints } from '@/services/endpoints';

export const useMajorDetail = (majorId) => {
    const [majorDetail, setMajorDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!majorId) return;

        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await getService(endpoints.majorDetail, { 
                    major_id: majorId 
                });

                if (res.code === 200) {
                    setMajorDetail(res.data);
                } else {
                    setMajorDetail([]);
                    setError(res.message);
                }
            } catch (err) {
                setError(err.message);
                setMajorDetail([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [majorId]);

    return { majorDetail, loading, error };
};