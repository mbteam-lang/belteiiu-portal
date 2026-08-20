import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { School, Clock } from "lucide-react";

export default function CourseCard({ course, onClick }) {
    const { t } = useTranslation();

    if (!course) return null;

    return (
        <motion.div
            whileHover={{ y: -4, scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full flex"
        >
            <Link
                to={`/lessons/${course.course_id}`}
                onClick={() => onClick && onClick(course.course_id)}
                className="group flex flex-col justify-between p-3 rounded-2xl border border-gray-100 dark:border-slate-700 bg-white dark:bg-[#353535] shadow-sm hover:shadow-xl transition-shadow duration-300 w-full"
            >
                <div>
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-gray-100 dark:bg-slate-700 shadow-inner">
                        <img
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-400 ease-out"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors duration-200 flex items-center justify-center">
                            <div className="bg-red-600 rounded-full p-3 shadow-lg text-white scale-95 group-hover:scale-110 transition-transform duration-200 ease-out">
                                <svg
                                    className="w-5 h-5 fill-current"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h3 className="text-base md:text-lg font-bold line-clamp-2 text-gray-800 dark:text-slate-100 group-hover:text-[#0a96a4] dark:group-hover:text-cyan-400 transition-colors duration-200 leading-snug">
                            {course.title}
                        </h3>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100 dark:border-slate-700">
                    <div className="flex items-center gap-2 min-w-0">
                        <div className="p-2.5 bg-[#0a96a4] text-white rounded-full flex justify-center items-center shrink-0 shadow-sm">
                            <School className="h-4.5 w-4.5" />
                        </div>
                        <div className="min-w-0">
                            <p className="text-sm md:text-base font-semibold text-gray-700 dark:text-white truncate">
                                {course.faculty}
                            </p>
                            <p className="text-[11px] text-gray-400 dark:text-slate-400 mt-0.5">
                                {t('e_learning.views')}: {course.view ?? 0}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400 shrink-0 bg-neutral-50 dark:bg-slate-700/60 px-2.5 py-1 rounded-lg border border-neutral-100 dark:border-slate-600">
                        <Clock className="h-3.5 w-3.5 text-gray-400 dark:text-slate-400" />
                        <span className="text-xs font-medium text-gray-600 dark:text-white">
                            {course.duration}
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}