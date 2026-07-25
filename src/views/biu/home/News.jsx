import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    Search,
    Newspaper,
    Video
} from "lucide-react";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useCategory } from "@/hooks/useNewsCategory";
import { useNews } from "@/hooks/useNews";
import usePageTitle from '@/hooks/usePageTitle';
import { formatDynamicDate } from "@/utils/formatDate";
import NoData from "@/components/common/Nodata";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ClearIcon from "@mui/icons-material/Clear";

const getCategoryIcon = (title) => {
    const normalizedTitle = title ? title.toLowerCase() : "";
    if (
        normalizedTitle.includes("video") ||
        normalizedTitle.includes("វីដេអូ") ||
        normalizedTitle.includes("视频") ||
        normalizedTitle.includes("录像")
    ) {
        return Video;
    }
    return Newspaper;
};

// Normalize app language code to what the API expects
const normalizeAppLang = (lang) => {
    if (!lang) return "km";
    const clean = lang.split("-")[0].toLowerCase();
    if (clean === "kh") return "km";
    if (clean === "zh") return "cn";
    return clean;
};

// If category has accept_lang use it, otherwise return null (will use app lang)
const resolveLang = (accept_lang) => {
    if (!accept_lang || accept_lang.trim() === "") return null;
    return accept_lang;
};

export default function News() {
    const { i18n } = useTranslation();
    const navigate = useNavigate();

    // ✅ Normalized app language — updates whenever i18n.language changes
    const appLang = normalizeAppLang(i18n.language);

    const currentLang = (() => {
        const raw = i18n.language?.split("-")[0] || "en";
        if (raw === "kh") return "km";
        return raw;
    })();

    usePageTitle('ព័ត៌មានទាំងអស់', 'All News');

    const { category: categories } = useCategory();

    const [activeNews, setActiveNews] = useState(null);
    const [activeQuery, setActiveQuery] = useState(null); // { categoryId, lang: string|null }
    const [searchKey, setSearchKey] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const perPageValue = itemsPerPage === "All" ? 9999 : itemsPerPage;

    // ✅ If category has no accept_lang (lang === null), use appLang directly in params
    // This means when appLang changes, queryParams changes → re-fetch fires automatically
    const effectiveLang = activeQuery?.lang ?? appLang;

    const queryParams = activeQuery
        ? {
            category_id: activeQuery.categoryId,
            pagination: perPageValue,
            page: currentPage,
            search_key: searchKey,
            lang: effectiveLang,
        }
        : null;

    const { newsData: data, loading, error, pagination } = useNews(queryParams);

    useEffect(() => {
        if (!categories || categories.length === 0) return;
        if (activeQuery === null) {
            const first = categories[0];
            setActiveQuery({
                categoryId: first.id,
                lang: resolveLang(first.accept_lang),
            });
            setCurrentPage(1);
        }
        // Check data response
        if (data && data.length > 0) {
            setActiveNews(data[0]);
        } else {
            setActiveNews(null);
        }
    }, [categories,data]);

    const handleCategoryClick = (category) => {
        if (activeQuery?.categoryId === category.id) return;
        setActiveQuery({
            categoryId: category.id,
            lang: resolveLang(category.accept_lang),
        });
        setCurrentPage(1);
        setSearchKey("");
        setSearchInput("");
        setActiveNews(null);
    };

    const toNumber = (num, lang) => {
        if (num === "All") return lang === 'km' ? "ទាំងអស់" : "All";
        if (num === "...") return "...";
        if (lang !== 'km') return num.toString();
        const kh = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"];
        return num.toString().split("").map(d => kh[d] ?? d).join("");
    };

    const totalPages = Number(pagination?.last_page) || 1;
    const totalItems = Number(pagination?.total) || 0;

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    const handlePerPageChange = (e) => {
        const value = e.target.value;
        const perPage = value === "All" ? "All" : Number(value);
        setItemsPerPage(perPage);
        setCurrentPage(1);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setActiveNews(null);
        setSearchKey(searchInput);
        setCurrentPage(1);
    };

    const getVisiblePages = () => {
        const pages = [];
        const maxVisible = 5;
        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
            return pages;
        }
        pages.push(1);
        let start = Math.max(2, currentPage - 1);
        let end = Math.min(totalPages - 1, currentPage + 1);
        if (currentPage <= 3) end = 4;
        if (currentPage >= totalPages - 2) start = totalPages - 3;
        if (start > 2) pages.push("...");
        for (let i = start; i <= end; i++) pages.push(i);
        if (end < totalPages - 1) pages.push("...");
        if (totalPages > 1) pages.push(totalPages);
        return pages;
    };

    const goToDetail = (item) => {
        navigate(`/news/detail/${item.id}`);
    };

    return (
        <section className="w-full min-h-screen bg-slate-50/50 text-slate-800 antialiased">
            <div className="max-w-[1600px] mx-auto p-4 md:p-6 lg:p-8 space-y-6">
                <div className="flex justify-between items-center border-b border-slate-200 pb-4 mt-4">
                    <Link to="/index_biu" className="hover:text-[#0a96a4] font-medium flex items-center gap-1.5 transition-all hover:gap-2 text-md md:text-lg text-[#0a98a9]">
                        <KeyboardDoubleArrowLeftIcon style={{ fontSize: 18 }} />{i18n.t('news.home')}
                    </Link>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-6 border-b border-slate-100">
                        <div>
                            <h2 className="text-lg md:text-2xl font-semibold text-gray-700">{i18n.t('news.news_category')}</h2>
                            <p className="text-sm text-gray-500 mt-2">{i18n.t('news.choose_category')}</p>
                        </div>
                        <form onSubmit={handleSearchSubmit} className="flex flex-wrap items-end gap-2.5 w-full lg:w-auto">
                            <div className="flex flex-col gap-1 flex-1 lg:w-80">
                                <div className="relative">
                                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        type="text"
                                        value={searchInput}
                                        onChange={(e) => setSearchInput(e.target.value)}
                                        placeholder={i18n.t("news.search_news")}
                                        className="w-full pl-10 pr-10 h-10 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm"
                                    />

                                    {searchInput && (
                                        <button
                                            type="button"
                                            onClick={() => setSearchInput("")}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                        >
                                            <ClearIcon fontSize="small" />
                                        </button>
                                    )}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-600 border border-gray-300 text-gray-400 hover:text-white hover:bg-[#0a96a9] active:scale-[0.98] font-medium text-sm px-5 py-2.5 rounded-lg transition-all"
                            >
                                {i18n.t('news.search')}
                            </button>
                        </form>
                    </div>

                    <div className="p-6 bg-white">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap gap-3">
                            {categories.map((item) => {
                                const Icon = getCategoryIcon(item.title);
                                const isSelected = activeQuery?.categoryId === item.id;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => handleCategoryClick(item)}
                                        className={`flex items-center justify-center lg:justify-start gap-2.5 px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-200 group ${
                                            isSelected
                                                ? "bg-[#0a96a9] border-[#0a96a9] text-white shadow-sm shadow-[#0a96a9]/20"
                                                : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-[#0a96a9]/5 hover:text-[#0a96a9]"
                                        }`}
                                    >
                                        <Icon className={`w-4 h-4 transition-colors ${isSelected ? "text-white" : "text-slate-400 group-hover:text-[#0a96a9]"}`} />
                                        <span>{item.title}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="w-full min-h-[400px]">
                    {loading ? (
                        <div className="flex flex-col space-y-2 lg:col-span-5 pt-1">
                            {[1, 2, 3, 4, 5].map((index) => (
                                <div key={index} className="flex gap-3 p-2 rounded-xl bg-gray-50 border border-gray-100 animate-pulse">
                                    <div className="flex-shrink-0 w-32 h-24 bg-gray-200 rounded-lg"></div>
                                    <div className="flex flex-col justify-between flex-1 py-1 space-y-2">
                                        <div>
                                            <div className="h-5 w-5/6 bg-gray-200 rounded mb-2"></div>
                                            <div className="h-4 w-full bg-gray-200 rounded mb-1"></div>
                                            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                                        </div>
                                        <div className="h-3 w-1/2 bg-gray-200 rounded mt-2"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : data.length === 0 ? (
                        <NoData/>
                    ) : (
                        <div className="space-y-3 pr-1">
                            <AnimatePresence mode="popLayout">
                                {data.map((item) => {
                                    const isActive = activeNews?.id === item.id;
                                    return (
                                        <motion.div
                                            layout
                                            key={item.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            onClick={() => setActiveNews(item)}
                                            className="flex gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300 group border border-transparent hover:border-gray-100"
                                            style={{
                                                background: isActive
                                                    ? "linear-gradient(to right, #dbeafe, rgba(255,255,255,0.3))"
                                                    : "linear-gradient(to right, #e4e4e7, rgba(255,255,255,0.6))",
                                            }}
                                        >
                                            <div className="relative w-36 h-28 sm:w-44 shrink-0 overflow-hidden rounded-lg bg-slate-100 shadow-inner">
                                                <img
                                                    src={item.image}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    alt=""
                                                    onError={(e) => { e.currentTarget.src = "https://placehold.co/600x400?text=No+Image"; }}
                                                />
                                                {item.video && (
                                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                        <div className="bg-black/20 rounded-full p-1.5 text-white">
                                                            <PlayCircleOutlineIcon/>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex flex-col justify-between flex-1 min-w-0 py-0.5">
                                                <div className="space-y-1">
                                                    <h3 className={`line-clamp-1 text-md md:text-lg font-semibold tracking-tight ${isActive ? "text-[#0a96a9]" : "text-gray-600"} group-hover:text-[#0a96a9]`}>
                                                        {item.title}
                                                    </h3>
                                                    <h4 className={`line-clamp-2 text-xs md:text-sm ${isActive ? "text-[#0a96a9]" : "text-gray-500"} font-normal group-hover:text-[#0a96a9]`}>
                                                        {item.remark}
                                                    </h4>
                                                </div>
                                                <div className="flex justify-between items-center mt-2">
                                                    <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
                                                        {currentLang === 'en' ? 'Views' : 'ចំនួនមើល'}: {item.views || 0} | {formatDynamicDate(item.posted_at)}
                                                    </p>
                                                    {isActive && (
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                goToDetail(item);
                                                            }}
                                                            className="text-sm text-[#0a96a9] font-medium flex items-center gap-1 mt-1 hover:underline w-fit"
                                                        >
                                                            {currentLang === 'en' ? 'View Details' : 'មើលលម្អិត'}
                                                            <ArrowForwardIcon style={{ fontSize: 14 }} />
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>
                    )}
                </div>

                {!loading && data.length > 0 && (
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-slate-200 pt-5">
                        <div className="text-xs md:text-sm text-gray-500 flex items-center gap-4">
                            <div className="bg-slate-100 px-3 py-1.5 rounded-lg font-medium">
                                {currentLang === 'km' ? 'បង្ហាញ៖' : 'Showing:'}{' '}
                                {toNumber((currentPage - 1) * (itemsPerPage === "All" ? totalItems : itemsPerPage) + 1, currentLang)}
                                {" - "}
                                {toNumber(Math.min(currentPage * (itemsPerPage === "All" ? totalItems : itemsPerPage), totalItems), currentLang)}
                            </div>
                            <div className="font-medium text-slate-700">
                                {currentLang === 'km' ? 'សរុប៖' : 'Total:'}{' '}
                                {toNumber(totalItems, currentLang)}
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <select
                                value={itemsPerPage}
                                onChange={handlePerPageChange}
                                className="border border-slate-200 bg-white text-slate-600 text-sm px-3 py-2 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 font-medium shadow-sm"
                            >
                                <option value={10}>{toNumber(10, currentLang)}</option>
                                <option value={20}>{toNumber(20, currentLang)}</option>
                                <option value={50}>{toNumber(50, currentLang)}</option>
                                <option value={100}>{toNumber(100, currentLang)}</option>
                                <option value={200}>{toNumber(200, currentLang)}</option>
                                <option value="All">{currentLang === 'km' ? 'ទាំងអស់' : 'All'}</option>
                            </select>

                            {itemsPerPage !== "All" && (
                                <div className="flex items-center gap-1 bg-white border border-slate-200 p-1 rounded-xl shadow-sm">
                                    <button onClick={() => handlePageChange(1)} disabled={currentPage === 1} className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 disabled:opacity-30 transition-colors">
                                        <ChevronsLeft size={16} />
                                    </button>
                                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 disabled:opacity-30 transition-colors">
                                        <ChevronLeft size={16} />
                                    </button>

                                    {getVisiblePages().map((p, i) =>
                                        p === "..." ? (
                                            <span key={i} className="px-2 text-slate-400 font-medium text-sm">...</span>
                                        ) : (
                                            <button
                                                key={i}
                                                onClick={() => handlePageChange(p)}
                                                className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium transition-all ${currentPage === p ? "bg-blue-600 text-white shadow-sm" : "text-slate-600 hover:bg-slate-100"}`}
                                            >
                                                {toNumber(p, currentLang)}
                                            </button>
                                        )
                                    )}

                                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 disabled:opacity-30 transition-colors">
                                        <ChevronRight size={16} />
                                    </button>
                                    <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 disabled:opacity-30 transition-colors">
                                        <ChevronsRight size={16} />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}