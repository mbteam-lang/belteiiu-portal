import React from "react";
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useFaculty } from '@/hooks/useFaculty';
import { useTranslation } from 'react-i18next';
import { School, BookOpen, GraduationCap, Video } from "lucide-react";
import { parseCount } from "@/utils/parseCount";

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
        threshold: 0.25,
        triggerOnce: true,
    });

    return (
        <section ref={ref} className="bg-neutral-50 dark:bg-[#282828] py-12 transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 md:divide-x md:divide-slate-200 dark:divide-slate-700/80">
                    {stats.map((item, index) => {
                        const { number, suffix } = parseCount(item.value);
                        const IconComponent = item.icon;
                        return (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                                transition={{ 
                                    duration: 0.5, 
                                    ease: [0.16, 1, 0.3, 1], 
                                    delay: index * 0.1 
                                }}
                                whileHover={{ y: -3, scale: 1.02 }}
                                className="flex flex-col items-center justify-center text-center px-4 py-2 cursor-default transition-all duration-200"
                            >
                                <h1 className="font-display text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-5xl">
                                    <span className="text-[#0a96a4] dark:text-cyan-400">
                                        {inView ? (
                                            <CountUp
                                                end={number}
                                                duration={2.2}
                                                useEasing={true}
                                                suffix={suffix}
                                            />
                                        ) : (
                                            "0"
                                        )}
                                    </span>
                                </h1>
                                <div className="flex flex-row items-center justify-center gap-2.5 text-center mt-3">
                                    {IconComponent && (
                                        <motion.div 
                                            whileHover={{ rotate: 10, scale: 1.1 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                            className="flex items-center justify-center rounded-xl bg-blue-50 dark:bg-[#353535] p-2 text-[#0a96a4] dark:text-cyan-400 shadow-sm border border-cyan-500/10"
                                        >
                                            <IconComponent className="h-5 w-5 md:h-6 md:w-6" />
                                        </motion.div>
                                    )}
                                    <span className="text-sm md:text-base font-semibold tracking-wide text-[#0a96a4] dark:text-gray-300 uppercase">
                                        {item.label}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}