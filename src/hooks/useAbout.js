import { useEffect, useState } from 'react';
import { getService } from '@/services/apiService';
import { aboutCache, detailCache } from '@/utils/apiCache';
import { getResponseMessage } from '@/utils/getResponseMessage';
import { getLanguage } from '@/services/languageService';
import { endpoints } from '@/services/endpoints';

export const useAbout = (id) => {
    const [about, setAbout] = useState([]);
    const [award, setAward] = useState([]);
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [nodata, setNodata] = useState(true);
    const [error, setError] = useState(null);

    const currentLanguage = getLanguage();
    const catchKey = `${currentLanguage}_${id}`;

    const fetchAbout = async () => {
        setLoading(true);
        try {
            const res = await getService(endpoints.about_list);
            if (res.code === 200) {
                aboutCache[currentLanguage] = res;
                setAbout(res.data);
            } else {
                setAbout([]);
                setError(getResponseMessage({ response: res }));
            }
        } catch (err) {
            setAbout([]);
            setError(getResponseMessage(err));
        } finally {
            setLoading(false);
        }
    };

    const fetchDetail = async (id) => {
        setLoading(true);
        try {
            const res = await getService(endpoints.type_university, {
                university: id,
            });

            if (res.code === 200) {
                detailCache[catchKey] = res;
                setDetails(res.data);
                setNodata(false);

            } else {
                setDetails([]);
                setError(getResponseMessage({ response: res }));
            }

        } catch (err) {
            setDetails([]);
            setError(getResponseMessage(err));

        } finally {
            setLoading(false);
        }
    };

    const fetchAward = async (id) => {
        setLoading(true);
        try {
            const res = await getService(endpoints.single_university, {
                university_list: id,
            });
            if (res.code === 200) {
                detailCache[catchKey] = res;
                setAward(res.data);
            } else {
                setAward([]);
                setError(getResponseMessage({ response: res }));
            }

        } catch (err) {
            setAward([]);
            setError(getResponseMessage(err));

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAbout();
        if (id != null) {
            fetchDetail(id);
            fetchAward(id);
        }
    }, [currentLanguage, id]);

    return {
        about,
        award,
        details,
        loading,
        nodata,
        error,
        refetch: {
            fetchAbout,
            fetchDetail,
            fetchAward
        },
    };
};