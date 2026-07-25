// src/pages/Details.jsx (or your specific News Details component file)
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CloseIcon from '@mui/icons-material/Close';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { useTranslation } from 'react-i18next';
import { getLanguage } from "@/services/languageService";
import { useParams, useNavigate } from "react-router-dom";
import NoData from '@/components/common/Nodata';
import { formatDynamicDate } from '@/utils/formatDate';
import YouTubePlayer from '@/components/common/YouTubePlayer';
import { useNews } from '@/hooks/useNews';

const FALLBACK_IMAGE = "https://media.istockphoto.com/id/931643150/vector/picture-icon.jpg?s=612x612&w=0&k=20&c=St-gpRn58eIa8EDAHpn_yO4CZZAnGD6wKpln9l3Z3Ok=";

export default function Details() {
    const { t } = useTranslation();
    const [currentImgIndex, setCurrentImgIndex] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const language = getLanguage();

    const queryParams = {
        news_id: id,
    };
    const { newsDetail, loading, error } = useNews(queryParams);
    const data = Array.isArray(newsDetail) ? newsDetail[0] : newsDetail;

    // --- Image Preview Controls ---
    const handlePrevImage = useCallback((e) => {
        e?.stopPropagation();
        if (!data?.albums?.length) return;
        setCurrentImgIndex((prevIndex) =>
            prevIndex === 0 ? data.albums.length - 1 : prevIndex - 1
        );
    }, [data?.albums?.length]);

    const handleNextImage = useCallback((e) => {
        e?.stopPropagation();
        if (!data?.albums?.length) return;
        setCurrentImgIndex((prevIndex) =>
            prevIndex === data.albums.length - 1 ? 0 : prevIndex + 1
        );
    }, [data?.albums?.length]);

    // Keyboard controls
    useEffect(() => {
        console.log("Data : ", data);
        if (currentImgIndex === null) return;
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") handlePrevImage();
            if (e.key === "ArrowRight") handleNextImage();
            if (e.key === "Escape") setCurrentImgIndex(null);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentImgIndex, handlePrevImage, handleNextImage]);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50/50 pt-3 lg:pt-10 pb-8 animate-pulse">
                <div className="w-11/12 max-w-7xl mx-auto h-[220px] sm:h-[300px] md:h-[420px] rounded-2xl bg-slate-200" />
                <div className="w-full max-w-7xl mx-auto mt-6 px-3 md:px-0">
                    <div className="p-3 md:p-6 space-y-6">
                        <div className="space-y-3">
                            <div className="h-6 md:h-8 bg-slate-200 rounded-md w-3/4" />
                            <div className="h-6 md:h-8 bg-slate-200 rounded-md w-1/2" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!loading && (error || !data)) {
        return (
            <div className="p-10 text-center text-red-500">
                <NoData />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50/50 font-khmer pt-5 lg:pt-10 pb-8">
            <div className="relative w-full max-w-5xl mx-auto aspect-video overflow-hidden rounded-lg p-2 md:p-4">
                {data.video ? (
                    <YouTubePlayer videoId={data.video} />
                ) : (
                    <img
                        src={data.image || FALLBACK_IMAGE}
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = FALLBACK_IMAGE;
                        }}
                        className="w-full h-full object-cover"
                        alt={data.title || "News Hero"}
                    />
                )}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-5 left-5 flex items-center justify-center w-10 h-10 bg-white/50 backdrop-blur border border-slate-100/30 text-black rounded-full transition-all duration-200 z-10 shadow-sm"
                >
                    <ArrowBackIcon style={{ fontSize: 18 }} />
                </button>
            </div>

            <div className="w-full max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="p-3 md:p-6 border border-slate-100 space-y-6"
                >
                    <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-[#0a96a9] leading-relaxed">
                        {data?.title}
                    </h1>
                    <div className="flex items-center gap-3 flex-wrap">
                        <div className="flex items-center gap-1 text-slate-400 text-sm font-medium">
                            <CalendarTodayIcon style={{ fontSize: 13 }} />
                            <span>
                                {t("news.posted")}: {formatDynamicDate(data.posted_at)}
                            </span>
                        </div>
                    </div>
                    <div className="text-slate-600 text-sm md:text-lg leading-8 whitespace-pre-line border-t border-gray-200 pt-4">
                        {data.remark || data.content || t("news.no_content")}
                    </div>

                    {/* Album Gallery Section */}
                    {data.albums && data.albums.length > 0 && (
                        <div className="space-y-4 pt-6 border-t border-slate-50">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-8 bg-blue-500 rounded inline-block"></span>
                                <h2 className="text-lg md:text-xl font-semibold text-[#0a96a9]">
                                    {t("news.image_albums")} ({data.albums.length})
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {data.albums.map((item, index) => (
                                    <div
                                        key={item.albums_id || index}
                                        className="overflow-hidden rounded-lg h-44 md:h-56 cursor-pointer group border border-slate-100 bg-slate-50"
                                        onClick={() => setCurrentImgIndex(index)}
                                    >
                                        <img
                                            src={item.name}
                                            onError={(e) => {
                                                e.currentTarget.onerror = null;
                                                e.currentTarget.src = FALLBACK_IMAGE;
                                            }}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                                            alt={`Gallery Album - ${item.albums_id || index}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            {currentImgIndex !== null && data?.albums?.[currentImgIndex] && (
                <div
                    className="fixed inset-0 backdrop-blur-sm bg-gray-100/20 z-50 flex items-center justify-center p-4 select-none"
                    onClick={() => setCurrentImgIndex(null)}
                >
                    <div className="absolute left-2 md:left-6 z-50 ">
                        <button onClick={handlePrevImage} className="active:scale-95 p-3 transition-all">
                            <NavigateBeforeIcon style={{ fontSize: 28 }} />
                        </button>
                    </div>
                    <div className="relative max-w-full max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={data.albums[currentImgIndex]?.name || FALLBACK_IMAGE}
                            className="max-w-full max-h-[80vh] rounded-xl shadow-2xl object-contain border border-white/10"
                            alt="Enlarged view"
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = FALLBACK_IMAGE;
                            }}
                        />
                        <div className="mt-3 bg-white/10 text-xs px-3 py-1">
                            {currentImgIndex + 1} / {data.albums.length}
                        </div>
                    </div>
                    <div className="absolute right-2 md:right-6 z-50">
                        <button onClick={handleNextImage} className="active:scale-95 p-3 transition-all">
                            <NavigateNextIcon style={{ fontSize: 28 }} />
                        </button>
                    </div>
                    <button
                        onClick={() => setCurrentImgIndex(null)}
                        className="absolute top-5 right-5 border border-black/10 rounded-full p-2 transition-all duration-200"
                    >
                        <CloseIcon />
                    </button>
                </div>
            )}
        </div>
    );
}