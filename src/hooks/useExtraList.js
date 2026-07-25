import { useEffect, useState } from 'react';
import { extraListCache } from '@/utils/apiCache';
import { getResponseMessage } from '@/utils/getResponseMessage';
import { getLanguage } from '@/services/languageService';
import { getService } from '@/services/apiService';
import { endpoints } from '@/services/endpoints';

export const useExtraList = (extraID) => {
    const [data, setExtraList] = useState([]);
    const [isGrouped, setIsGrouped] = useState(false);
    const [years, setYears] = useState([]);
    const [fileTitle, setFileTitle] = useState("");
    const [fileLink, setFileLink] = useState("");
    const [noData, setNoData] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const currentLanguage = getLanguage();
    const cacheKey = `${currentLanguage}_${extraID}`;

    useEffect(() => {
        if (extraID) {
            fetchExtraList(extraID);
        }
    }, [currentLanguage, extraID]);

    const fetchExtraList = async (id) => {
        setLoading(true);
        setNoData(false);
        setError(null);

        // Check Cache
        if (extraListCache[cacheKey]) {
            const cached = extraListCache[cacheKey];
            processResponseData(cached);
            setLoading(false);
            return;
        }

        try {
            const res = await getService(endpoints.extraList, { main_extras_id: id });
            if (res && res.data) {
                extraListCache[cacheKey] = res.data;
                processResponseData(res.data);
            } else {
                setNoData(true);
                setExtraList([]);
            }
        } catch (err) {
            setError(getResponseMessage(err));
            setExtraList([]);
        } finally {
            setLoading(false);
        }
    };

    const processResponseData = (responseData) => {
        const list = responseData?.list || [];
        const file = responseData?.file || "";

        if (list.length === 0 && !file) {
            setNoData(true);
            return;
        }
        const grouped = list.length > 0 && Array.isArray(list[0]?.items);
        setIsGrouped(grouped);
        setExtraList(list);
        setFileTitle(responseData?.file_title || "");
        setFileLink(file);

        // Calculate unique years
        const allItems = grouped ? list.flatMap(g => g.items || []) : list;
        const uniqueYears = [...new Set(allItems.map(i => i.year).filter(Boolean))].sort();
        setYears(uniqueYears);
    };

    return { 
        data, 
        isGrouped, 
        years, 
        fileTitle, 
        fileLink, 
        noData, 
        loading, 
        error, 
        currentLanguage,
        refetch: () => fetchExtraList(extraID)
    };
};