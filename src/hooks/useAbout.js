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
        if (aboutCache[currentLanguage] && Array.isArray(aboutCache[currentLanguage])) {
            setAbout(aboutCache[currentLanguage]);
            return;
        }
        setLoading(true);
        try {
            const res = await getService(endpoints.about_list);
            if (res.code === 200 && Array.isArray(res.data)) {
                aboutCache[currentLanguage] = res.data;
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
        if (detailCache[catchKey] && Array.isArray(detailCache[catchKey])) {
            setDetails(detailCache[catchKey]);
            setNodata(false);
            return;
        }
        setLoading(true);
        try {
            const res = await getService(endpoints.type_university, {
                university: id,
            });

            if (res.code === 200 && Array.isArray(res.data)) {
                detailCache[catchKey] = res.data;
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
            if (res.code === 200 && Array.isArray(res.data)) {
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
        about: Array.isArray(about) ? about : [],
        award: Array.isArray(award) ? award : [],
        details: Array.isArray(details) ? details : [],
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