import React from "react";
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { useFaculty } from '@/hooks/useFaculty';
import { useTranslation } from 'react-i18next';
import { School, BookOpen, GraduationCap, Video } from "lucide-react";
import {parseCount} from "@/utils/parseCount";

export default function StatsSection() {
    const { counts } = useFaculty();
    const { t } = useTranslation();

    const stats = [
        { value: counts?.faculties ?? "0", label: t("home.faculties"), icon: School },
        { value: counts?.majors ?? "0",    label: t("home.majors"),    icon: GraduationCap },
        { value: counts?.courses ?? "0",   label: t("home.courses"),   icon: BookOpen },
        { value: counts?.videos ?? "0",    label: t("home.videos"),    icon: Video },
    ];

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <section ref={ref} className="bg-neutral-50 dark:bg-[#282828] py-10">
            <div className="lg:max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 md:divide-x md:divide-slate-200 dark:divide-slate-600">
                    {stats.map((item, index) => {
                        const { number, suffix } = parseCount(item.value);
                        const IconComponent = item.icon;
                        return (
                            <div 
                                className="flex flex-col items-center justify-center text-center px-4"
                                key={index}
                            >
                                <h1 className="font-display text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-200 md:text-5xl">
                                    <span className="text-[#0a96a4]">
                                        {inView ? (
                                            <CountUp
                                                end={number}
                                                duration={2.5}
                                                suffix={suffix}
                                            />
                                        ) : (
                                            "0"
                                        )}
                                    </span>
                                </h1>
                                <div className="flex flex-row items-center justify-center gap-2 text-center mt-3">
                                    {IconComponent && (
                                        <div className="flex items-center justify-center rounded-xl bg-blue-50 dark:bg-[#353535] p-2 text-[#0a96a4] dark:text-gray-300">
                                            <IconComponent className="h-5 w-5 md:h-6 md:w-6 dark:text-gray-300" />
                                        </div>
                                    )}
                                    <span className="text-md md:text-lg font-semibold tracking-wide text-[#0a96a4] dark:text-gray-300 uppercase">
                                        {item.label}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
