import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { School, Clock } from "lucide-react";

export default function CourseCard({ course, onClick }) {
    const { t } = useTranslation();

    //  course get {thumbnail, title, faculty, view,duration }
    if (!course) return null;

    return (
        <Link
            // route to lesson video
            to={`/lessons/${course.course_id}`}
            onClick={() => onClick && onClick(course.course_id)}
            className="group flex flex-col justify-between p-3 rounded-2xl border border-gray-100 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-xl transition-all duration-300 w-full"
        >
            <div>
                <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-gray-100 dark:bg-slate-700 shadow-inner">
                    <img
                        // thumbnail
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="bg-red-600 rounded-full p-3 shadow-md text-white scale-95 group-hover:scale-100 transition-transform duration-300">
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
                    <h3 className="text-md md:text-lg font-semibold line-clamp-2 text-gray-700 dark:text-slate-100 group-hover:text-[#0a96a4] dark:group-hover:text-cyan-400 transition-colors leading-snug">
                        {/* title */}
                        {course.title}
                    </h3>
                </div>
            </div>
            <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100 dark:border-slate-700">
                <div className="flex items-center gap-2 min-w-0">
                    <div className="p-3 bg-[#0a96a4] text-white rounded-full flex justify-center items-center shrink-0">
                        <School className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-sm md:text-md font-medium text-gray-600 dark:text-slate-300 truncate">
                            {/* faculty */}
                            {course.faculty}
                        </p>
                        <p className="text-[11px] text-gray-400 dark:text-slate-400 mt-0.5">
                            {/* view */}
                            {t('e_learning.views')}: {course.view ?? 0}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-1 text-gray-400 shrink-0 bg-neutral-50 dark:bg-slate-700/60 px-2 py-1 rounded-lg border border-neutral-100 dark:border-slate-600">
                    <Clock className="h-3.5 w-3.5 text-gray-400 dark:text-slate-400" />
                    <span className="text-xs font-medium text-gray-500 dark:text-slate-300">
                        {/* duration */}
                        {course.duration}
                    </span>
                </div>
            </div>
        </Link>
    );
}