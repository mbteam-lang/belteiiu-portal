import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import SchoolIcon from '@mui/icons-material/School';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import axios from 'axios';
import i18n from 'i18next';
import Cover from '@/assets/images/cover.png'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Index() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [dataPopCourse, setDataPopCourse] = useState([]);
    const [dataNewCourse, setDataNewCourse] = useState([]);
    const [countAll, setCountAll] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const headers = {
                    'Accept-Language': localStorage.getItem('selectedLanguage') || 'en'
                };

                const [faculties, popularCourses, newCourses, countAll] = await Promise.all([
                    axios.get(`${import.meta.env.REACT_APP_BASE_URL}/faculties`, { headers }),
                    axios.get(`${import.meta.env.REACT_APP_BASE_URL}/popular_courses`, { headers }),
                    axios.get(`${import.meta.env.REACT_APP_BASE_URL}/new_courses`, { headers }),
                    axios.get(`${import.meta.env.REACT_APP_BASE_URL}/count_all`)
                ]);
                setData(faculties.data.data || []);
                setDataPopCourse(popularCourses.data.data || []);
                setDataNewCourse(newCourses.data.data || []);
                setCountAll(countAll.data.data || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Post count view
    const handleClick = async (courseId) => {
        try {
            const response = await axios.post(`${import.meta.env.REACT_APP_BASE_URL}/count_view`, {
                id: courseId
            });
            localStorage.removeItem('selectedLessonId');
            localStorage.removeItem('selectedVideoUrl');
        } catch (error) {
            console.error('Error counting view:', error);
        }
    };

    return (
        <>
            <div className="bg-[#fafafa] dark:bg-[#181818] min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-200">
                <div className="relative flex justify-center items-center">
                    <img src={Cover} alt="" className='w-full md:h-[550px] h-[250px] object-cover' />
                    <div className='absolute flex flex-col justify-center items-center text-center xl:space-y-10 lg:space-y-8 md:space-y-5 sm:space-y-2 space-y-3'>
                        <h1 className='font-black text-center md:text-5xl lg:text-6xl xl:text-7xl text-3xl text-white sm:mb-4 mb-2'>សិក្សាតាមប្រព័ន្ធអេឡិចត្រូនិច</h1>
                        <h1 className='font-black text-center md:text-5xl lg:text-6xl xl:text-7xl text-3xl text-white sm:mb-4 mb-2'>E-Learning</h1>
                        {/* <h1 className='text-white xl:text-3xl  lg:text-2xl md:text-xl sm:text-lg text-sm font-bold'></h1> */}
                        <div className=' md:w-auto text-center flex flex-wrap justify-center xl:gap-32 lg:gap-28 md:gap-10'>
                            <div className="w-28 md:w-auto">
                                <CountUp end={countAll.faculty_count} duration={3}>
                                    {({ countUpRef }) => (
                                        <h1 className='text-white font-black md:text-5xl lg:text-6xl xl:text-7xl text-3xl ' ref={countUpRef} />
                                    )}
                                </CountUp>
                                <h1 className='text-white text-lg md:text-xl xl:text-xl  lg:text-lg md:text-md sm:text-sm font-bold'>{i18n.t('index.faculty')}</h1>
                            </div>
                            <div className="w-28 md:w-auto">
                                <CountUp end={countAll.all_major} duration={3}>
                                    {({ countUpRef }) => (
                                        <h1 className='text-white font-black md:text-5xl lg:text-6xl xl:text-7xl text-3xl ' ref={countUpRef} />
                                    )}
                                </CountUp>
                                <h1 className='text-white text-lg md:text-xl xl:text-xl  lg:text-lg md:text-md sm:text-sm font-bold'>{i18n.t('index.major')}</h1>
                            </div>
                            <div className="w-28 md:w-auto">
                                <CountUp end={countAll.course_count} duration={5}>
                                    {({ countUpRef }) => (
                                        <h1 className='text-white font-black md:text-5xl lg:text-6xl xl:text-7xl text-3xl ' ref={countUpRef} />
                                    )}
                                </CountUp>
                                <h1 className='text-white text-lg md:text-xl xl:text-xl  lg:text-lg md:text-md sm:text-sm font-bold'>{i18n.t('index.lesson')}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* faculties */}
                <section className="mt-10 md:w-11/12 md:px-0 px-5 mx-auto">
                    {loading ? (
                        <div className="skeleton-item md:w-60 w-32 mx-auto md:h-8 h-5 rounded-md bg-gray-200 dark:bg-slate-700 animate-pulse mb-5" />
                    ) : (
                        <h1 className="font-black md:text-3xl text-xl text-center mb-10 text-[#4E4E4E] dark:text-slate-100">{i18n.t('index.12fac')}</h1>
                    )}
                    {loading ? (
                        <div className="skeleton-loading">
                            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 '>
                                {[...Array(12)].map((_, index) => (
                                    <div key={index} className="skeleton-item w-full h-16 rounded-md bg-gray-200 dark:bg-[#353535] border border-gray-100 dark:border-slate-700 animate-pulse" />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                            {data.map((item, index) => (
                                <Link to={`/faculty/${item.id}`} className='overflow-hidden rounded-xl hover:scale-105 transition-transform duration-300' key={index} style={{ border: `1px solid ${item.color}` }}>
                                    <div className="h-20 w-full flex justify-start items-center gap-1 drop-shadow-md rounded-lg overflow-hidden" style={{ backgroundColor: item.color }}>
                                        <div className="flex w-20 h-20 bg-white dark:bg-[#353535]">
                                            <img src={item.image} alt="" className="mx-auto w-auto h-full p-2" />
                                        </div>
                                        <div className='w-full flex flex-col gap-2'>
                                            <h1 className="text-white font-normal md:text-[16px] text-sm ml-3">{item.title}</h1>
                                            <h1 className="text-slate-100 font-light text-[12px] ml-3">{i18n.t('index.have')} {item.major_count} {i18n.t('index.major')}</h1>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                    {/* popular video */}
                    <div className='flex gap-5 py-10'>
                        <div className='w-14 h-14 bg-[#D6EBED] dark:bg-[#353535] rounded-full flex items-center justify-center'>
                            <div className='w-10 h-10 bg-[#0a96a4] rounded-full flex items-center justify-center'>
                                <CastForEducationIcon className='w-10 h-10 text-white' />
                            </div>
                        </div>
                        <h1 className="font-bold text-xl flex items-center text-[#4E4E4E] dark:text-slate-100">{i18n.t('index.pop_lesson')}</h1>
                    </div>

                    <section className='mx-auto'>
                        {loading ? (
                            <div className="skeleton-loading">
                                <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
                                    {[...Array(4)].map((_, indexPopCourse) => (
                                        <div key={indexPopCourse} className="skeleton-item w-full h-60 rounded-md bg-gray-200 dark:bg-[#353535] border border-gray-100 dark:border-slate-700 animate-pulse" />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
                                {dataPopCourse.map((popCourse, indexPopCourse) => {
                                    const maxLength = 30;
                                    const isTruncated = popCourse.title.length > maxLength;
                                    const displayText = isTruncated ? `${popCourse.title.substring(0, maxLength)}...` : popCourse.title;
                                    return (
                                        <Link to={`/lessons/${popCourse.id}`} onClick={() => { handleClick(popCourse.id); }} key={indexPopCourse}>
                                            <div key={indexPopCourse} className="rounded-xl shadow-md h-auto p-3 bg-white dark:bg-[#353535] border border-gray-100 dark:border-slate-700">
                                                <div className='relative md:h-48 h-52 overflow-hidden'>
                                                    <img className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300" src={popCourse.thumbnail} alt="popCourse image" />
                                                    <div className='bg-[#5EA45A] h-6 absolute bottom-2 right-2 flex gap-2 rounded-md px-2'>
                                                        <YouTubeIcon className='w-10 h-10 text-white' />
                                                        <h1 className='text-white'>{i18n.t('index.video')}</h1>
                                                    </div>
                                                </div>
                                                <div className="relative group text-left">
                                                    <div>
                                                        <h1 className="text-md line-clamp-2 p-1 mt-2 text-[#4E4E4E] dark:text-slate-100">{displayText}</h1>
                                                        {isTruncated && (
                                                            <div className="absolute pointer-events-none w-auto bottom-full text-left transform mb-2 px-3 py-2 group-hover:bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100">
                                                                <h1 className='bg-black'>
                                                                    {popCourse.title}
                                                                </h1>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className='flex items-center gap-3 mt-3'>
                                                    <div className='w-10 h-10 p-4 bg-[#0a96a4] rounded-full flex items-center justify-center '>
                                                        <SchoolIcon className='text-white' />
                                                    </div>
                                                    <div className='px-2 w-full'>
                                                        <h1 className="text-md text-[#8f8f8f] dark:text-white">{popCourse.faculty}</h1>
                                                        <div className='flex justify-between items-center'>
                                                            <h1 className="text-sm text-[#8f8f8f] dark:text-slate-400">{i18n.t('index.view')}: {popCourse.view}</h1>
                                                            <div className='flex gap-1 items-center'>
                                                                <AccessTimeIcon className="text-sm text-[#8f8f8f] dark:text-slate-400" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        )}
                    </section>

                    <div className='flex gap-5 py-10'>
                        <div className='w-14 h-14 bg-[#D6EBED] dark:bg-[#353535] rounded-full flex items-center justify-center'>
                            <div className='w-10 h-10 bg-[#0a96a4] rounded-full flex items-center justify-center'>
                                <CastForEducationIcon className='w-10 h-10 text-white' />
                            </div>
                        </div>
                        <h1 className="font-bold text-xl flex items-center text-[#4E4E4E] dark:text-slate-100">{i18n.t('index.new_lesson')}</h1>
                    </div>

                    <section className='mx-auto'>
                        {loading ? (
                            <div className="skeleton-loading">
                                <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
                                    {[...Array(4)].map((_, indexNewCourse) => (
                                        <div key={indexNewCourse} className="skeleton-item w-full h-60 rounded-md bg-gray-200 dark:bg-[#353535] border border-gray-100 dark:border-slate-700 animate-pulse" />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
                                {dataNewCourse.map((newCourse, indexNewCourse) => {
                                    const maxLength = 30;
                                    const isTruncated = newCourse.title.length > maxLength;
                                    const displayText = isTruncated ? `${newCourse.title.substring(0, maxLength)}...` : newCourse.title;
                                    return (
                                        <Link to={`/lessons/${newCourse.id}`} onClick={() => { handleClick(newCourse.id); }} key={indexNewCourse}>
                                            <div key={indexNewCourse} className="rounded-xl shadow-md h-auto p-3 bg-white dark:bg-[#353535] border border-gray-100 dark:border-slate-700">
                                                <div className='relative h-48 overflow-hidden'>
                                                    <img className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300" src={newCourse.thumbnail} alt="newCourse image" />
                                                    <div className='bg-[#5EA45A] h-6 absolute bottom-2 right-2 flex gap-2 rounded-md px-2'>
                                                        <YouTubeIcon className='w-10 h-10 text-white' />
                                                        <h1 className='text-white'>{i18n.t('index.video')}</h1>
                                                    </div>
                                                </div>
                                                <div className="relative group text-left">
                                                    <div>
                                                        <h1 className="text-md line-clamp-2 p-1 mt-2 text-[#4E4E4E] dark:text-slate-100">{displayText}</h1>
                                                        {isTruncated && (
                                                            <div className="absolute pointer-events-none w-auto bottom-full text-left transform mb-2 px-3 py-2 group-hover:bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100">
                                                                <h1 className='bg-black'>
                                                                    {newCourse.title}
                                                                </h1>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className='flex items-center gap-3 mt-3'>
                                                    <div className='w-10 h-10 p-4 bg-[#0a96a4] rounded-full flex items-center justify-center '>
                                                        <SchoolIcon className='text-white' />
                                                    </div>
                                                    <div className='px-2 w-full'>
                                                        <h1 className="text-md text-[#8f8f8f] dark:text-white">{newCourse.faculty}</h1>
                                                        <div className='flex justify-between items-center'>
                                                            <h1 className="text-sm text-[#8f8f8f] dark:text-slate-400">{i18n.t('index.view')}: {newCourse.view}</h1>
                                                            <div className='flex gap-1 items-center'>
                                                                <AccessTimeIcon className="text-[10px] text-[#8f8f8f] dark:text-slate-400" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        )}
                    </section>
                    <div className="h-10"></div>
                </section>
            </div>
        </>
    );
}
