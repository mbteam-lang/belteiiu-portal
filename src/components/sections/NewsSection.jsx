import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { formatDynamicDate } from "@/utils/formatDate";
import { useNews } from "@/hooks/useNews";
import { useTranslation } from "react-i18next";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Loading } from "@/components/common/Loading";
import { getLanguage } from "@/services/languageService";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.35,
        },
    },
};

export default function NewsSection() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [selectedNews, setSelectedNews] = useState(null);
    const queryParams = useMemo(
        () => ({
            category_id: 1,
            pagination: 5,
            page: 1,
            lang: getLanguage(),
        })
    );
    const { newsData = [], latestNews, loading, error } = useNews(queryParams);
    const activeNews = selectedNews || latestNews;
    const goToDetail = (item) => {
        navigate(`/news/detail/${item.id}`);
    };

    // if (loading) {
    //     return <Loading />;
    // }

    if (!loading && newsData.length === 0) {
        return (
            <section className="py-10 bg-white">
                <div className="max-w-7xl mx-auto text-center py-20 text-gray-500">
                    {error || "No news available."}
                </div>
            </section>
        );
    }

    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center border-b pb-4">
                    <div className="flex items-center gap-2">
                        <div className="h-7 w-1.5 bg-blue-800 rounded-full"></div>
                        <h1 className="text-xl md:text-2xl font-medium text-slate-800">
                            {t("home.latest_news")}
                        </h1>
                    </div>
                    <Link
                        to="/news"
                        className="text-[#0a96a4] font-medium flex items-center gap-2 hover:gap-4 transition-all"
                    >
                        {t("home.see_all")}
                        <span className="text-xl">»</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-10">
                    {activeNews && (
                        <div className="lg:col-span-7">
                            <div className="overflow-hidden rounded-lg shadow-md bg-black relative">
                                <img
                                    src={activeNews.image}
                                    alt={activeNews.title}
                                    className={`w-full h-[220px] sm:h-[320px] md:h-[420px] object-cover ${
                                        activeNews.video ? "opacity-80" : ""
                                    }`}
                                    onError={(e) => {
                                        e.currentTarget.src =
                                            "https://placehold.co/800x500?text=No+Image";
                                    }}
                                />
                            </div>

                            <div className="mt-5 space-y-4">
                                <div className="flex items-center gap-3">
                                    <span
                                        className={`text-white px-3 py-1 rounded text-xs flex items-center gap-1 ${
                                            activeNews.video
                                                ? "bg-red-600"
                                                : "bg-[#0a96a4]"
                                        }`}
                                    >
                                        {activeNews.video ? (
                                            <PlayCircleOutlineIcon
                                                sx={{ fontSize: 14 }}
                                            />
                                        ) : (
                                            <LocalOfferIcon
                                                sx={{ fontSize: 14 }}
                                            />
                                        )}
                                        {activeNews.category}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        {formatDynamicDate(activeNews.posted_at)}
                                    </span>
                                </div>
                                <h2 className="text-2xl font-semibold text-[#0a96a4]">
                                    {activeNews.title}
                                </h2>
                                <p className="text-gray-500 line-clamp-4">
                                    {activeNews.remark}
                                </p>
                                <button
                                    onClick={() => goToDetail(activeNews)}
                                    className="text-[#0a96a4] font-medium flex items-center gap-2 hover:gap-3 transition-all"
                                >
                                    {t("welcome.js_btn_readmore")}
                                    <ArrowForwardIcon />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* News List */}
                    <motion.div
                        className="lg:col-span-5 overflow-y-auto space-y-3"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {newsData.slice(0, 5).map((item) => {
                            const isActive = activeNews?.id === item.id;
                            return (
                                <motion.div
                                    key={item.id}
                                    variants={itemVariants}
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => {
                                        console.log("Video ID : ", item.video);
                                        setSelectedNews(item);
                                    }}
                                    className={`flex gap-4 rounded-xl p-3 cursor-pointer transition ${
                                        isActive
                                            ? "bg-blue-50"
                                            : "bg-gray-100 hover:bg-gray-50"
                                    }`}
                                >
                                    {/* Thumbnail with video icon */}
                                    <div className="w-36 h-28 overflow-hidden rounded-lg shrink-0 relative">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className={`w-full h-full object-cover ${
                                                item.video ? "opacity-80" : ""
                                            }`}
                                            onError={(e) => {
                                                e.currentTarget.src =
                                                    "https://placehold.co/600x400?text=No+Image";
                                            }}
                                        />
                                        {item.video && (
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                <div className="bg-black/20 rounded-full p-1.5 text-white">
                                                    <PlayCircleOutlineIcon/>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col justify-between flex-1">
                                        <div>
                                            <h3
                                                className={`font-semibold line-clamp-1 ${
                                                    isActive
                                                        ? "text-[#0a96a4]"
                                                        : "text-gray-700"
                                                }`}
                                            >
                                                {item.title}
                                            </h3>

                                            <p className="text-sm text-gray-500 line-clamp-2">
                                                {item.remark}
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-xs text-gray-500">
                                                {t("e_learning.views")} :{" "}
                                                {item.views || 0} |{" "}
                                                {formatDynamicDate(item.posted_at)}
                                            </span>
                                            {isActive && (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        goToDetail(item);
                                                    }}
                                                    className="text-[#0a96a4] text-sm flex items-center gap-1"
                                                >
                                                    {t("home.read_more")}
                                                    <ArrowForwardIcon
                                                        sx={{ fontSize: 15 }}
                                                    />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}