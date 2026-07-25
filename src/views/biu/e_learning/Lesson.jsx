import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PlayCircle, List } from 'lucide-react';
import { createPlayer } from '@videojs/react';
import { MinimalVideoSkin, Video, videoFeatures } from '@videojs/react/video';
import '@videojs/react/video/minimal-skin.css';
import SchoolIcon from '@mui/icons-material/School';
import SearchComponent from './Search.jsx';
import i18n from 'i18next';
import usePageTitle from '@/hooks/usePageTitle.js';
import { useElearning } from '@/hooks/useElearning.js';
import NoData from '@/components/common/Nodata.jsx';

const Player = createPlayer({ features: videoFeatures });

export default function LessonScreen() {
    const { id: courseID } = useParams();
    usePageTitle('កិច្ចសហប្រតិបត្តិការជាតិ', 'National Collaboration');
    const { lesson, relatedCourse, loading, nodata, countView } = useElearning({ courseID });
    const [activeLessonId, setActiveLessonId] = useState(null);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [showList, setShowList] = useState(true);

    useEffect(() => {
        if (lesson?.weeks?.[0]?.lessons?.[0]) {
            const first = lesson.weeks[0].lessons[0];
            setActiveLessonId(first.id);
            setCurrentVideo(first.video);
        }
    }, [lesson]);

    const handleClick = (courseId) => {
        countView(courseId);
        localStorage.removeItem('selectedLessonId');
        localStorage.removeItem('selectedVideoUrl');
    };

    return (
        <>
            {loading ? (
                <div className="min-h-screen bg-[#f8fafc] text-gray-900">
                    <main className="max-w-[1600px] mx-auto px-4 lg:px-6 py-6">
                        <div className="flex flex-col xl:flex-row gap-6">
                            <div className="flex-1 min-w-0 space-y-6">
                                <div className="aspect-video rounded-2xl bg-gray-200 animate-pulse" />
                                <div className="h-8 w-2/3 bg-gray-200 rounded animate-pulse" />
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-gray-200 animate-pulse" />
                                    <div className="space-y-2">
                                        <div className="h-4 w-40 bg-gray-200 rounded animate-pulse" />
                                        <div className="h-3 w-28 bg-gray-200 rounded animate-pulse" />
                                    </div>
                                </div>
                                <div className="p-4 rounded-lg border bg-white space-y-3">
                                    <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                                    <div className="h-3 w-full bg-gray-200 rounded animate-pulse" />
                                    <div className="h-3 w-5/6 bg-gray-200 rounded animate-pulse" />
                                    <div className="h-3 w-2/3 bg-gray-200 rounded animate-pulse" />
                                </div>
                            </div>
                            <div className="w-full xl:w-[400px] shrink-0">
                                <div className="rounded-xl border bg-white p-4 space-y-4">
                                    <div className="h-6 w-2/3 bg-gray-200 rounded animate-pulse" />
                                    {[...Array(8)].map((_, i) => (
                                        <div key={i} className="p-4 rounded-xl border bg-gray-50 space-y-2">
                                            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
                                            <div className="h-3 w-1/3 bg-gray-200 rounded animate-pulse" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            ) : lesson ? (
                <div className="min-h-screen bg-[#f8fafc] text-gray-900">
                    <SearchComponent />
                    <main className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
                        <div className="flex flex-col xl:flex-row gap-6">

                            {/* LEFT - VIDEO */}
                            <div className="flex-1 min-w-0">
                                <div className="aspect-video rounded-xl overflow-hidden border border-gray-200 bg-gray-100">
                                    <Player.Provider>
                                        <MinimalVideoSkin>
                                            <Video
                                                key={activeLessonId}
                                                src={currentVideo}
                                                playsInline
                                                autoPlay
                                            />
                                        </MinimalVideoSkin>
                                    </Player.Provider>
                                </div>
                                <div className="mt-6">
                                    <h1 className="text-2xl lg:text-3xl font-bold">
                                        {lesson.courseTitle}
                                     </h1>
                                </div>
                                <div className="mt-6 flex items-center gap-4 ">
                                    <div className="rounded-full bg-[#BFE2EA] flex items-center justify-center p-2">
                                        <div className="w-9 h-9 rounded-full bg-[#0a96a4] flex items-center justify-center">
                                            <SchoolIcon className="text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base">{lesson.faculty}</h3>
                                        <p className="text-sm text-gray-500">
                                            {lesson.department}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-6 p-4 rounded-lg border bg-gray-100 border-gray-100">
                                    <h3 className="font-bold mb-2">{i18n.t('e_learning.description')}</h3>
                                    <p className="text-sm text-gray-500">
                                        {lesson.description}
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT - LESSON LIST */}
                           <div className="w-full xl:w-[550px] shrink-0">
                                <div className="rounded-xl border overflow-hidden bg-white border-gray-200">
                                    <div className="p-5 border-b flex items-center justify-between border-gray-100">
                                        <h3 className="font-bold truncate">{lesson.courseTitle}</h3>
                                        <button
                                            onClick={() => setShowList(!showList)}
                                            className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                                        >
                                            <List size={18} />
                                        </button>
                                    </div>
                                    {showList && (
                                        <div className="max-h-[75vh] overflow-y-auto p-3 space-y-6">
                                            {lesson.weeks.map((week) => (
                                                <div key={week.id}>
                                                    <div className="text-xs font-bold mb-3 text-gray-400 uppercase tracking-wider px-1">
                                                        {week.title}
                                                    </div>
                                                    <div className="space-y-2">
                                                        {week.lessons.map((item) => {
                                                            const isActive = activeLessonId === item.id;
                                                            return (
                                                                <div
                                                                    key={item.id}
                                                                    onClick={() => {
                                                                        setActiveLessonId(item.id);
                                                                        setCurrentVideo(item.video);
                                                                    }}
                                                                    className={`p-4 rounded-xl cursor-pointer border transition-all duration-200 ${isActive
                                                                                ? 'bg-blue-50 border-blue-200'
                                                                                : 'bg-white border-gray-100 hover:bg-gray-50 shadow-sm'
                                                                            }`}
                                                                >
                                                                    <div className="flex gap-3 items-start">
                                                                        <PlayCircle
                                                                            className={`mt-2 flex-shrink-0 ${isActive ? 'text-[#009688]' : 'text-gray-400'}`}
                                                                            size={20}
                                                                        />
                                                                        <div className="flex-1 min-w-0">
                                                                            <h4 className={`text-sm font-medium text-gray-700 leading-tight truncate ${isActive ? 'text-[#0a96a4] font-semibold' : ''}`}>
                                                                                {item.title}
                                                                            </h4>
                                                                            <div className="flex items-center justify-between gap-2">
                                                                                <div className="text-xs text-gray-400 mt-1">
                                                                                    {item.duration}
                                                                                </div>
                                                                                {isActive && (
                                                                                    <div className="flex items-end gap-[2px] h-3 w-4 shrink-0 mb-0.5">
                                                                                        <div className="w-[3px] bg-[#009688] rounded-full animate-[equalizer_0.8s_ease-in-out_infinite_alternate]" style={{ height: '30%' }}></div>
                                                                                       <div className="w-[3px] bg-[#009688] rounded-full animate-[equalizer_0.5s_ease-in-out_infinite_alternate]" style={{ height: '60%', animationDelay: '0.15s' }}></div>
                                                                                       <div className="w-[3px] bg-[#009688] rounded-full animate-[equalizer_0.7s_ease-in-out_infinite_alternate]" style={{ height: '40%', animationDelay: '0.3s' }}></div>
                                                                                    </div>
                                                                               )}
                                                                            </div>
                                                                        </div>
                                                                   </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* RELATED COURSES */}
                        <section className="mt-10">
                            <div className="mt-6 flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-[#BFE2EA] flex items-center justify-center">
                                    <div className="w-10 h-10 rounded-full bg-[#0a96a4] flex items-center justify-center">
                                        <PlayCircle className="text-white" />
                                    </div>
                                </div>
                                <h3 className="font-bold text-base">{i18n.t('e_learning.relatedcourse')}</h3>
                            </div>

                            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                                {relatedCourse.length > 0 ? (
                                    relatedCourse.map((item) => (
                                        <Link
                                            key={item.course_id}
                                            to={`/lessons/${item.course_id}`}
                                            onClick={() => handleClick(item.course_id)}
                                        >
                                            <div className="rounded-xl shadow-md p-3 bg-white hover:shadow-lg transition-shadow">
                                                <div className="relative h-48 overflow-hidden rounded-md">
                                                    <img
                                                        src={item.thumbnail}
                                                        alt={item.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <h1 className="mt-2 text-lg text-[#4E4E4E] line-clamp-1 font-medium">
                                                    {item.title}
                                                </h1>
                                                <div className="flex justify-between items-center mt-3">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-10 h-10 bg-[#0a96a4] rounded-full flex justify-center items-center">
                                                            <SchoolIcon fontSize="small" className="text-white" />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-gray-500">{item.faculty}</p>
                                                           <p className="text-xs text-gray-400">
                                                                {i18n.t('e_learning.views')}: {item.view}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="text-sm text-gray-500">{item.duration}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    <div className="col-span-full flex justify-center py-10">
                                        <NoData />
                                    </div>
                                )}
                            </div>
                        </section>
                    </main>
                </div>
            ) : (
                <div className="col-span-full flex justify-center py-10">
                    <NoData />
                </div>
            )}
        </>
    );
}