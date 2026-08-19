import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from "react";
import { FaYoutube } from "react-icons/fa";
import usePageTitle from '@/hooks/usePageTitle';
import { useExtraList } from '@/hooks/useExtraList';
import NoData from '@/components/common/Nodata';
import pdfIcon from "@/assets/icons/pdf.png";

export default function ExtraList() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    usePageTitle('', '', location.state?.title);
    const openedRef = useRef(false);
    const [filterYear, setFilterYear] = useState("");

    const {
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
        currentLanguage
    } = useExtraList(id, 10, filterYear || null);

    // Infinite scroll observer setup
    const observer = useRef();
    const lastElementRef = useCallback((node) => {
        if (loading || loadingMore) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                loadMore();
            }
        });

        if (node) observer.current.observe(node);
    }, [loading, loadingMore, hasMore, loadMore]);

    useEffect(() => {
        if (!loading && data.length === 0 && fileLink) {
            if (!openedRef.current) {
                openedRef.current = true;
                window.open(fileLink, "_blank");
            }
            navigate('/extra_program', { replace: true });
        }
    }, [data, fileLink, loading, navigate]);

    return (
        <div className="flex flex-col gap-2 md:gap-3 md:p-3 p-2 max-w-7xl m-auto min-h-screen">
            {/* PDF File Banner */}
            {fileLink && fileTitle && (
                <Link to={fileLink} target="_blank" className="flex-shrink-0">
                    <div className="flex items-center gap-4 p-2 bg-gray-200 dark:bg-[#353535] border border-gray-300 dark:border-slate-700 rounded-lg w-full">
                        <img
                            src={pdfIcon}
                            alt="PDF"
                            className="w-14 h-14 object-contain flex-shrink-0"
                        />
                        <div className="flex-1 overflow-hidden">
                            <h2 className="text-md md:text-lg font-medium text-gray-700 dark:text-slate-200 line-clamp-2">
                                {fileTitle}
                            </h2>
                        </div>
                    </div>
                </Link>
            )}

            {/* Year Filters */}
            {years.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                    <button
                        onClick={() => setFilterYear("")}
                        className={`px-4 py-2 rounded transition-colors ${
                            !filterYear 
                                ? 'bg-[#0a96a4] text-white' 
                                : 'bg-gray-200 dark:bg-[#353535] text-gray-800 dark:text-slate-200 hover:bg-gray-300 dark:hover:bg-slate-700'
                        }`}
                    >
                        {currentLanguage ? "ទាំងអស់" : "All"}
                    </button>
                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => setFilterYear(year)}
                            className={`px-4 py-2 rounded transition-colors ${
                                filterYear === year 
                                    ? 'bg-[#0a96a4] text-white' 
                                    : 'bg-gray-200 dark:bg-[#353535] text-gray-800 dark:text-slate-200 hover:bg-gray-300 dark:hover:bg-slate-700'
                            }`}
                        >
                            {currentLanguage ? `ឆ្នាំទី ${year}` : `Year ${year}`}
                        </button>
                    ))}
                </div>
            )}

            {/* Flat List (Non-Grouped) */}
            {!isGrouped && data.map((item, index) => {
                const isLast = data.length === index + 1;
                return (
                    <button
                        ref={isLast ? lastElementRef : null}
                        key={item.id}
                        onClick={() => navigate(`/extras-detail/${item.id}#${currentLanguage}`, { state: { title: location.state?.title } })}
                        className="flex w-full border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-[#353535] rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition mb-1 text-left p-2"
                    >
                        <img
                            src={item.image}
                            className="w-[110px] h-[70px] md:w-[160px] md:h-[90px] flex-shrink-0 object-cover rounded"
                            alt=""
                        />
                        <div className="flex flex-col justify-start items-start px-3 py-1 text-left w-full overflow-hidden">
                            <p className="font-medium text-gray-600 dark:text-slate-100 text-md md:text-lg leading-tight line-clamp-1 w-full text-left">
                                {item.title}
                            </p>
                            {item.description && (
                                <p className="text-sm md:text-md text-gray-600 dark:text-white leading-snug line-clamp-2 mt-1 w-full text-left">
                                    {item.description}
                                </p>
                            )}
                        </div>
                    </button>
                );
            })}

            {/* Grouped by Program */}
            {isGrouped && data.map((group) => (
                <div key={group.id} className="mt-3">
                    <h1 className={`mx-auto text-white font-semibold md:w-[320px] w-[245px] md:h-[50px] h-[35px] overflow-hidden flex items-center justify-center text-[13px] md:text-lg rounded-[50%] mb-6 ${
                        group.id === 1 ? "bg-[#0a96a4]" : group.id === 2 ? "bg-red-500" : "bg-[#0a96a4]"
                    }`}>
                        {group.program}{group.id === 1 ? " (IP)" : " (NP)"}
                    </h1>
                    {group.items?.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => navigate(`/extras-detail/${item.id}#${currentLanguage}`, { state: { title: item.title } })}
                            className="flex w-full border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-[#353535] rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition mb-2"
                        >
                            <div className="relative flex-shrink-0 p-1">
                                <img src={item.image} className="w-[130px] h-[80px] md:w-[160px] md:h-[90px] flex-shrink-0 object-cover rounded" alt="" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <FaYoutube className="text-red-600 text-3xl md:text-4xl drop-shadow-lg" />
                                </div>
                            </div>
                            <div className="p-3 text-left">
                                <p className="font-medium text-gray-600 dark:text-slate-100 line-clamp-3 text-[14px] md:text-lg">
                                    {item.title}
                                </p>
                            </div>
                        </button>
                    ))}
                </div>
            ))}

            {/* Target sentinel for grouped lists */}
            {isGrouped && <div ref={lastElementRef} className="h-2" />}

            {/* Initial & Loading More Skeletons */}
            {(loading || loadingMore) && Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-[#353535] rounded-lg animate-pulse mb-2">
                    <div className="w-[110px] h-[70px] md:w-[160px] md:h-[90px] bg-gray-300 dark:bg-slate-700 flex-shrink-0 rounded-l-lg"></div>
                    <div className="flex-1 p-3 space-y-2">
                        <div className="h-4 bg-gray-300 dark:bg-slate-700 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-300 dark:bg-slate-700 rounded w-1/2"></div>
                    </div>
                </div>
            ))}

            {/* Empty State */}
            {!loading && noData && <NoData />}
        </div>
    );
}