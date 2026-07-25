import { useEffect, useState, useCallback } from 'react';
// switched to centralized getService
import { newsDetailCache } from '@/utils/apiCache';
import { getResponseMessage } from '@/utils/getResponseMessage';
import { getLanguage } from '@/services/languageService';
import { endpoints } from '@/services/endpoints';
import { getService } from '@/services/apiService';

export const useNews = (queryParams) => {
    const [newsData, setNewsData] = useState([]);
    const [newsDetail, setNewDetail] = useState(null);
    const [pagination, setPagination] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetching full news list
    const fetchNews = useCallback(async () => {
        if (!queryParams || queryParams.news_id) return;

        setLoading(true);
        setError(null);
        try {
            const res = await getService(endpoints.search_news, queryParams);
            if (res.code === 200) {
                setNewsData(Array.isArray(res.data) ? res.data : []);
                setPagination(res.meta || {});
            } else {
                setNewsData([]);
                setPagination({});
                setError(getResponseMessage({ response: res }));
            }
        } catch (err) {
            setError(getResponseMessage(err));
            setNewsData([]);
            setPagination({});
        } finally {
            setLoading(false);
        }
    }, [JSON.stringify(queryParams)]);

    // Fetching single news detail
    const fetchNewDetail = useCallback(async () => {
        const id = queryParams?.news_id;
        if (!id) return;
        const currentLanguage = getLanguage();
        const cacheKey = `${currentLanguage}_${id}`;

        // ✅ CACHE HIT
        if (newsDetailCache[cacheKey]) {
            setNewDetail(newsDetailCache[cacheKey]);
            setLoading(false);
            setError(null);
            return;
        }

        setLoading(true);
        setError(null);
        
        console.log("News ID:", id);
        try {
            const res = await getService(endpoints.single_news, { news_id: id });
            if (res.code === 200) {
                newsDetailCache[cacheKey] = res.data;
                setNewDetail(res.data);
            } else {
                setNewDetail(null);
                setError(getResponseMessage({ response: res }));
            }
        } catch (err) {
            setNewDetail(null);
            setError(getResponseMessage(err));
        } finally {
            setLoading(false);
        }
    }, [queryParams?.news_id]);

    useEffect(() => {
        fetchNews();
        fetchNewDetail();
    }, [fetchNews, fetchNewDetail]);

    const latestNews = newsData[0] ?? null;
    const sideNews = newsData.slice(0);
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 260, damping: 20 },
        },
    };

    return {
        newsData,
        newsDetail,
        pagination,
        latestNews,
        sideNews,
        loading,
        error,
        refetch: fetchNews,
        containerVariants,
        itemVariants,
    };
};