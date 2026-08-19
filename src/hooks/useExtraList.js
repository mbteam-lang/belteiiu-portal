import { useEffect, useState, useCallback, useRef } from 'react';
import { extraListCache } from '@/utils/apiCache';
import { getResponseMessage } from '@/utils/getResponseMessage';
import { getLanguage } from '@/services/languageService';
import { getService } from '@/services/apiService';
import { endpoints } from '@/services/endpoints';

export const useExtraList = (extraID, perPage = 10, filterYear = null) => {
    const [data, setExtraList] = useState([]);
    const [isGrouped, setIsGrouped] = useState(false);
    const [years, setYears] = useState([1, 2, 3, 4, 5]);
    const [fileTitle, setFileTitle] = useState("");
    const [fileLink, setFileLink] = useState("");
    const [noData, setNoData] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);

    const currentLanguage = getLanguage();
    const loadingRef = useRef(false);

    // Merge helper for grouped or flat items
    const appendItems = (prevList, newList, isGroup) => {
        if (!isGroup) return [...prevList, ...newList];

        const map = new Map();
        [...prevList, ...newList].forEach((group) => {
            if (!map.has(group.id)) {
                map.set(group.id, { ...group, items: [...(group.items || [])] });
            } else {
                const existing = map.get(group.id);
                const existingItemIds = new Set(existing.items.map((i) => i.id));
                const uniqueNewItems = (group.items || []).filter((i) => !existingItemIds.has(i.id));
                existing.items.push(...uniqueNewItems);
            }
        });
        return Array.from(map.values());
    };

    const fetchPage = useCallback(async (targetPage, isReset = false) => {
        if (!extraID || loadingRef.current) return;
        loadingRef.current = true;

        if (isReset) {
            setLoading(true);
        } else {
            setLoadingMore(true);
        }
        setError(null);

        const cacheKey = `${currentLanguage}_${extraID}_p${targetPage}_pp${perPage}_y${filterYear || 'all'}`;

        try {
            let responseData = null;
            let metadata = null;

            if (extraListCache[cacheKey]) {
                const cached = extraListCache[cacheKey];
                responseData = cached.data;
                metadata = cached.metadata;
            } else {
                const params = {
                    main_extras_id: extraID,
                    page: targetPage,
                    per_page: perPage,
                    ...(filterYear && { filter_year: filterYear }),
                };
                const res = await getService(endpoints.extraList, params);
                if (res && res.data) {
                    responseData = res.data;
                    metadata = res.metadata || res.meta || null;
                    extraListCache[cacheKey] = { data: responseData, metadata };
                }
            }

            if (responseData) {
                const list = responseData.list || [];
                const grouped = list.length > 0 && Array.isArray(list[0]?.items);
                setIsGrouped(grouped);
                setFileTitle(responseData.file_title || "");
                setFileLink(responseData.file || "");

                setExtraList((prev) => (isReset ? list : appendItems(prev, list, grouped)));

                // Calculate unique filter years
                const allItems = grouped ? list.flatMap((g) => g.items || []) : list;
                const uniqueYears = [...new Set(allItems.map((i) => Number(i.year)).filter(Boolean))];
                if (uniqueYears.length > 0) {
                    setYears((prev) => [...new Set([...prev, ...uniqueYears])].sort((a, b) => a - b));
                }

                // Check if more pages are available
                if (metadata) {
                    setHasMore(targetPage < metadata.last_page);
                } else {
                    setHasMore(list.length === perPage);
                }
                setNoData(isReset && list.length === 0 && !responseData.file);
            } else if (isReset) {
                setNoData(true);
                setExtraList([]);
                setHasMore(false);
            }
        } catch (err) {
            setError(getResponseMessage(err));
            if (isReset) setExtraList([]);
        } finally {
            setLoading(false);
            setLoadingMore(false);
            loadingRef.current = false;
        }
    }, [extraID, currentLanguage, perPage, filterYear]);

    // Reset list whenever filterYear, extraID, or language changes
    useEffect(() => {
        setPage(1);
        setHasMore(true);
        fetchPage(1, true);
    }, [extraID, currentLanguage, filterYear, fetchPage]);

    // Load next page trigger
    const loadMore = useCallback(() => {
        if (!loading && !loadingMore && hasMore) {
            setPage((prevPage) => {
                const nextPage = prevPage + 1;
                fetchPage(nextPage, false);
                return nextPage;
            });
        }
    }, [loading, loadingMore, hasMore, fetchPage]);

    return {
        data,
        isGrouped,
        years,
        fileTitle,
        fileLink,
        noData,
        loading,
        loadingMore,
        hasMore,
        loadMore,
        currentLanguage,
        refetch: () => fetchPage(1, true),
    };
};