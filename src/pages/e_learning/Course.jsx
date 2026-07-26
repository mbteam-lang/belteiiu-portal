import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useElearning } from '@/hooks/useElearning';
import usePageTitle from '@/hooks/usePageTitle';
import NoData from '@/components/common/Nodata';
import { useTranslation } from 'react-i18next';

const timeToSeconds = (time) => {
    if (!time || typeof time !== 'string') return 0;
    const parts = time.split(':').map(Number);
    if (parts.length === 3) {
        const [h, m, s] = parts;
        return h * 3600 + m * 60 + s;
    }
    if (parts.length === 2) {
        const [m, s] = parts;
        return m * 60 + s;
    }
    return 0;
};

export const formatDuration = (seconds) => {
    const sec = Number(seconds);
    if (Number.isNaN(sec)) return '0:00';
    const hrs = Math.floor(sec / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const secs = Math.floor(sec % 60);
    if (hrs > 0) {
        return `${hrs}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    return `${mins}:${String(secs).padStart(2, '0')}`;
};

export default function Course() {
    const { t } = useTranslation();
    const { id } = useParams();
    
    // Performance fix: Use lazy state initialization
    const [isDark] = useState(() => localStorage.getItem('darkMode') === 'dark');

    usePageTitle('កិច្ចសហប្រតិបត្តិការជាតិ', 'National Collaboration');

    const { course, loading, nodata, error, countView } = useElearning({ subjectID: id });

    const handleClick = async (courseId) => {
        countView(courseId);
        localStorage.removeItem('selectedLessonId');
        localStorage.removeItem('selectedVideoUrl');
    };

    useEffect(() => {
        console.log("Course data:", course);
    }, [course]);

    return (
        <div className={`${isDark ? 'bg-[#181818]' : 'bg-[#fafafa]'} min-h-screen`}>

            {/* Loading skeleton */}
            {loading && (
                <div className="w-full">
                    <div className={`w-full ${isDark ? 'bg-[#303030]' : 'bg-[#BFE2EA]'}`}>
                        <div className='flex items-center container mx-auto gap-5 md:px-2 px-5 py-3'>
                            <div className='lg:w-14 lg:h-14 w-12 h-12 drop-shadow-lg bg-gray-200 animate-pulse rounded-full flex justify-center items-center' />
                            <div className='w-48 h-6 rounded bg-gray-200 animate-pulse' />
                        </div>
                    </div>
                    <section className="container mx-auto px-2 py-10">
                        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className={`rounded-xl shadow-md p-3 h-full flex flex-col justify-between animate-pulse ${isDark ? 'bg-[#303030]' : 'bg-white'}`}>
                                    <div>
                                        <div className='relative h-48 overflow-hidden rounded-md bg-gray-200' />
                                        <div className='mt-3 h-5 bg-gray-200 rounded w-3/4' />
                                        <div className='mt-2 h-4 bg-gray-200 rounded w-1/2' />
                                    </div>

                                    <div className='flex justify-between items-center mt-5 pt-2 border-t border-gray-100'>
                                        <div className='flex items-center gap-1 min-w-0 w-2/3'>
                                            <div className='w-8 h-8 flex-shrink-0 bg-gray-200 rounded-full' />
                                            <div className='ml-2 min-w-0 flex-1 space-y-2'>
                                                <div className='h-3 bg-gray-200 rounded w-full' />
                                                <div className='h-3 bg-gray-200 rounded w-1/2' />
                                            </div>
                                        </div>
                                        <div className='h-4 bg-gray-200 rounded w-12 flex-shrink-0' />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            )}

            {/* No data */}
            {!loading && nodata && (
                <div className="container mx-auto px-2 py-10">
                    <NoData />
                </div>
            )}
            
            {!loading && !nodata && (
                <>
                    {/* Header */}
                    <div className={`w-full ${isDark ? 'bg-[#303030]' : 'bg-[#BFE2EA]'}`}>
                        <div className='flex items-center container mx-auto gap-5 md:px-2 px-5'>
                            <div className='lg:w-14 lg:h-14 w-12 h-12 drop-shadow-lg bg-[#BFE2EA] flex justify-center items-center rounded-full my-3'>
                                <div className='lg:w-10 lg:h-10 w-8 h-8 bg-[#0a96a4] rounded-full flex justify-center items-center'>
                                    <CastForEducationIcon className='text-white' />
                                </div>
                            </div>
                            <h1 className={`font-bold md:text-xl text-lg flex items-center ${isDark ? 'text-white opacity-75' : 'text-[#4E4E4E]'}`}>
                                {course && course.length > 0 ? course[0]?.title : ''}
                            </h1>
                        </div>
                    </div>

                    {/* Courses grid */}
                    <section className="container mx-auto px-2 py-10">
                        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                            {course?.map((item) => {
                                const subCourses = item.course || item.courses || [];
                                return subCourses.map((courseItem, courseIndex) => (
                                    <Link
                                        key={`${courseItem.course_id}-${courseIndex}`}
                                        to={`/lessons/${courseItem.course_id}`}
                                        onClick={() => handleClick(courseItem.course_id)}
                                    >
                                        <div className={`rounded-xl shadow-md p-3 h-full flex flex-col justify-between transition-colors ${isDark ? 'bg-[#303030]' : 'bg-white'}`}>
                                            <div>
                                                <div className='relative h-48 overflow-hidden rounded-md'>
                                                    <img
                                                        src={courseItem.thumbnail}
                                                        alt={courseItem.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className='absolute bottom-2 right-2 bg-[#5EA45A] flex items-center gap-1 px-2 rounded-md text-white text-sm'>
                                                        <YouTubeIcon fontSize="small" />
                                                        {t('e_learning.videos')}
                                                    </div>
                                                </div>
                                                <h1 className={`mt-2 font-semibold text-lg line-clamp-2 ${isDark ? 'text-white opacity-90' : 'text-[#4E4E4E]'}`}>
                                                    {courseItem.title}
                                                </h1>
                                            </div>

                                            <div className={`flex justify-between items-center mt-3 pt-2 border-t ${isDark ? 'border-gray-700' : 'border-gray-100'}`}>
                                                <div className='flex items-center gap-1 min-w-0'>
                                                    <div className='w-8 h-8 flex-shrink-0 bg-[#0a96a4] rounded-full flex justify-center items-center'>
                                                        <SchoolIcon fontSize="small" className='text-white' />
                                                    </div>
                                                    <div className='ml-2 min-w-0'>
                                                        <h1 className={`text-sm truncate max-w-[120px] ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                                                            {courseItem.faculty}
                                                        </h1>
                                                        <h1 className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>
                                                            {t('e_learning.views')} : {courseItem.view}
                                                        </h1>
                                                    </div>
                                                </div>
                                                <div className={`flex items-center gap-1 text-sm flex-shrink-0 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                                                    <AccessTimeIcon fontSize="small" />
                                                    {formatDuration(timeToSeconds(courseItem.duration))}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ));
                            })}
                        </div>
                    </section>
                </>
            )}
        </div>
    );
}