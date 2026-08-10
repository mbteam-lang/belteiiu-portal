import React from "react";
import { useTranslation } from 'react-i18next';
import { useFaculty } from '@/hooks/useFaculty';
import { Link } from "react-router-dom";
import { getLanguage } from '@/services/languageService';

export default function FacultySection() {
    const { t } = useTranslation();
    const currentLanguage = getLanguage();
    const { facultiesData } = useFaculty(3);
    
    return (
        <section className="py-10 bg-neutral-50 dark:bg-[#282828]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-center mb-20">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-blue-200">
                        
                        {currentLanguage === 'en' 
                            ? `The ${facultiesData.data?.length ?? 0} Faculties`
                            : `មហាវិទ្យាល័យទាំង ${facultiesData.data?.length ?? 0}`
                        }
                    </h1>
                </div>
                {/* {loading && <Loading/>} */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {facultiesData && (
                        facultiesData.data?.map((items, index) => (
                            <Link key={index} to={items.link || `#`} className="group">
                                <div
                                    className="rounded-xl flex items-center gap-4 w-full text-white dark:text-gray-200 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
                                    style={{
                                        backgroundColor: items.color || '#1e3a8a',
                                        borderColor: items.color || '#1e3a8a',
                                        boxShadow: items.color ? `0 4px 15px -5px ${items.color}88` : 'none'
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
                                            className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="text-left pr-4">
                                        <h3 className="md:text-lg text-md font-medium leading-tight dark:text-gray-200">
                                            {items.faculty}
                                        </h3>
                                        <p className="text-xs md:text-sm mt-1 opacity-90 font-medium dark:text-gray-300">
                                            {t('header.js_have')} {items.major_count} {t('home.majors')} 
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </div>
           
            
        </section>
    );
}