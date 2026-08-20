import React from "react";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useFaculty } from '@/hooks/useFaculty';
import { Link } from "react-router-dom";
import { getLanguage } from '@/services/languageService';

export default function FacultySection() {
    const { t } = useTranslation();
    const currentLanguage = getLanguage();
    const { facultiesData } = useFaculty(3);
    
    return (
        <section className="py-12 bg-neutral-50 dark:bg-[#282828] transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center justify-center mb-12 sm:mb-16"
                >
                    <h1 className="text-3xl md:text-4xl font-black text-blue-900 dark:text-cyan-300 tracking-tight text-center">
                        {currentLanguage === 'en' 
                            ? `The ${facultiesData.data?.length ?? 0} Faculties`
                            : `មហាវិទ្យាល័យទាំង ${facultiesData.data?.length ?? 0}`
                        }
                    </h1>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {facultiesData && (
                        facultiesData.data?.map((items, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ 
                                    duration: 0.45, 
                                    ease: [0.16, 1, 0.3, 1], 
                                    delay: index * 0.035 
                                }}
                                whileHover={{ y: -4, scale: 1.015 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link to={items.link || `#`} className="group block h-full">
                                    <div
                                        className="rounded-2xl flex items-center gap-4 w-full h-full text-white dark:text-gray-100 border transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden"
                                        style={{
                                            backgroundColor: items.color || '#1e3a8a',
                                            borderColor: items.color ? `${items.color}66` : '#1e3a8a',
                                            boxShadow: items.color ? `0 4px 20px -6px ${items.color}66` : 'none'
                                        }}
                                    >
                                        <div className="flex justify-center items-center w-24 h-24 bg-white/95 dark:bg-gray-800/95 p-3 shrink-0">
                                            <img
                                                src={items.image}
                                                alt={items.faculty}
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = "https://www.beltei.edu.kh/asset/img/biu/app/assoiate.png";
                                                }}
                                                className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300 ease-out"
                                            />
                                        </div>
                                        <div className="text-left pr-4 py-2">
                                            <h3 className="md:text-lg text-base font-bold leading-snug dark:text-gray-100 group-hover:text-cyan-200 transition-colors">
                                                {items.faculty}
                                            </h3>
                                            <p className="text-xs md:text-sm mt-1 opacity-90 font-medium dark:text-gray-300">
                                                {t('header.js_have')} {items.major_count} {t('home.majors')} 
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}