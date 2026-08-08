import React, { useState, useEffect } from 'react';
import SchoolIcon from '@mui/icons-material/School';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link, useParams } from 'react-router-dom';
import i18n from 'i18next';
import Searchcomponent from './Search.jsx';
import {getResponseMessage} from '@/utils/getResponseMessage';
import usePageTitle from '@/hooks/usePageTitle.js';
import { useElearning } from '@/hooks/useElearning.js';
import NoData from '@/components/common/Nodata.jsx';

export default function Subject_list() {
    const { id } = useParams();
    usePageTitle('កិច្ចសហប្រតិបត្តិការជាតិ', 'National Collaboration');
    const { subjectList, loading , nodata} = useElearning(id);
    const [isDark, setIsDark] = useState(localStorage.getItem('darkMode') === 'dark');

    // State for navigation
    const [selectedMajorIndex, setSelectedMajorIndex] = useState(0);
    const [selectedYearIndex, setSelectedYearIndex] = useState(0);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

    // Safe Data Access
    const facultyData = subjectList?.[0];
    const currentMajor = facultyData?.major?.[selectedMajorIndex];
    const currentYear = currentMajor?.year?.[selectedYearIndex];

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#181818] text-gray-500 dark:text-slate-100">
                <div className="animate-pulse flex flex-col items-center">
                    <SchoolIcon sx={{ fontSize: 60 }} className="mb-4 opacity-20" />
                    <p className="font-medium">Loading Curriculum...</p>
                </div>
            </div>
        );
    }
    if (nodata || !facultyData) {
        return (
            <div className='min-h-screen flex flex-col items-center justify-center'>
                <NoData />
            </div>
        );
    }
    return (
        <div>
            <div className="min-h-screen pb-20 bg-gray-50 dark:bg-[#181818] text-slate-800 dark:text-slate-100 transition-colors duration-200">
                {/* Header / Title Section */}
                <Searchcomponent />
                <div className="bg-[#BFE2EA] dark:bg-[#303030] py-6 shadow-md transition-colors">
                    <div className="container mx-auto px-5 flex items-center gap-5 ">
                        <div className="w-20 h-20 bg-[#BFE2EA] dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg">
                            <div className="w-14 h-14 bg-[#0a96a4] rounded-full flex items-center justify-center">
                                <SchoolIcon className="text-white" />
                            </div>
                        </div>
                        <h1 className="text-xl md:text-2xl font-bold text-[#4E4E4E] dark:text-slate-100">
                            {facultyData?.faculty}
                        </h1>
                    </div>
                </div>

                <div className="container mx-auto px-5 py-8 flex flex-col md:flex-row gap-8">
                    
                    {/* Sidebar: Majors */}
                    <aside className="w-full md:w-1/3 lg:w-1/4">
                        <h2 className="text-lg font-bold mb-4 border-b-2 pb-2 text-[#4E4E4E] border-[#BFE2EA] dark:text-slate-100 dark:border-slate-700">
                            {i18n.t('home.major')}
                        </h2>

                        {isMobileView ? (
                            <select
                                value={selectedMajorIndex}
                                onChange={(e) => {
                                    setSelectedMajorIndex(Number(e.target.value));
                                    setSelectedYearIndex(0);
                                }}
                                className="w-full p-3 rounded-xl border outline-none font-bold shadow-sm bg-white dark:bg-[#303030] border-[#BFE2EA] dark:border-slate-700 text-[#4E4E4E] dark:text-slate-100"
                            >
                                {facultyData.major.map((m, idx) => (
                                    <option key={idx} value={idx}>{m.major}</option>
                                ))}
                            </select>
                        ) : (
                            <div className="flex flex-col gap-2">
                                {facultyData.major.map((m, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            setSelectedMajorIndex(idx);
                                            setSelectedYearIndex(0);
                                        }}
                                        className={`flex justify-between items-center px-5 py-4 rounded-full transition-all duration-200 font-bold ${
                                            selectedMajorIndex === idx
                                                ? 'bg-[#0a96a4] text-white shadow-md'
                                                : 'bg-white dark:bg-[#303030] text-[#4E4E4E] dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700'
                                        }`}
                                    >
                                        <span>{m.major}</span>
                                        <KeyboardArrowRightIcon />
                                    </button>
                                ))}
                            </div>
                        )}
                    </aside>

                    {/* Main Content: Years & Semesters */}
                    <main className="w-full md:w-2/3 lg:w-3/4">
                        
                        {/* Year Tabs */}
                        <div className="flex rounded-xl shadow-sm mb-8 overflow-hidden sticky top-4 z-0 bg-white dark:bg-[#303030] border border-gray-200 dark:border-slate-700">
                            {currentMajor?.year?.map((y, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedYearIndex(idx)}
                                    className={`flex-1 py-4 text-sm md:text-base font-bold transition-all border-b-4 ${
                                        selectedYearIndex === idx
                                            ? 'border-[#0a96a4] text-[#0a96a4] dark:text-cyan-400'
                                            : 'border-transparent text-gray-400 dark:text-slate-400 hover:text-gray-500 dark:hover:text-slate-200'
                                    }`}
                                >
                                    {y.years}
                                </button>
                            ))}
                        </div>

                        {/* Semesters & Subject Cards */}
                        <div className="space-y-10">
                            {currentYear?.semester?.map((sem, semIdx) => (
                                <section key={semIdx} className="rounded-3xl shadow-lg overflow-hidden border bg-white dark:bg-[#303030] border-gray-100 dark:border-slate-700">
                                    
                                    {/* Semester Header */}
                                    <div className="px-6 py-4 flex items-center gap-3 bg-[#BFE2EA] bg-opacity-20 dark:bg-[#181818]">
                                        <CalendarMonthIcon className="text-[#0a96a4] dark:text-cyan-400" />
                                        <h3 className="text-lg font-bold text-[#0a96a4] dark:text-cyan-400">
                                            {sem.semester}
                                        </h3>
                                    </div>

                                    {/* Subjects List */}
                                    <div className="p-5 flex flex-col gap-3">
                                        {sem.subject.map((sub, i) => (
                                            <Link 
                                                to={`/courses/${sub.subject_id}`} 
                                                key={i}
                                                className="block group"
                                            >
                                                <div className="flex justify-between items-center px-6 py-5 rounded-2xl border transition-all duration-200 shadow-sm bg-white dark:bg-[#181818] border-gray-100 dark:border-slate-700 group-hover:border-[#0a96a4] dark:group-hover:border-[#0a96a4] group-hover:shadow-md">
                                                    <span className="font-bold transition-colors text-[#4E4E4E] dark:text-slate-100 group-hover:text-[#0a96a4] dark:group-hover:text-cyan-400">
                                                        {sub.subject}
                                                    </span>
                                                    <KeyboardArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-2 text-gray-400 dark:text-slate-400" />
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}