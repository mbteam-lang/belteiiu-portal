import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { sharingVideos } from '../../data/sharingVideo'; // Imported shared list
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { formatDynamicDate } from '@/utils/formatDate';
import { Clapperboard } from 'lucide-react';

export default function WatchVideo() {
    const { t } = useTranslation();
    const { id } = useParams();
    const navigate = useNavigate();

    const currentVideo = sharingVideos.find(video => video.youtubeId === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!currentVideo) {
        return <div className="text-center py-20 font-medium text-slate-600">Video not found.</div>;
    }

    const recommendedVideos = sharingVideos.filter(video => video.youtubeId !== id);

    return (
        <section className=" min-h-screen py-6 max-w-7xl mx-auto px-4 lg:px-6">
            <div className="flex justify-between items-center border-b border-slate-200 pb-4 mt-4 mb-8">
                <Link to="/index_biu" className="hover:text-[#0a96a4] font-medium flex items-center gap-1.5 transition-all hover:gap-2 text-md md:text-lg text-[#0a98a9]">
                    <KeyboardDoubleArrowLeftIcon style={{ fontSize: 18 }} />{t('news.home')}
                </Link>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* LEFT COLUMN: Main Video Player & Details */}
                <div className="lg:col-span-2">
                    <div className="aspect-video w-full bg-black rounded-xl overflow-hidden shadow-sm">
                        <iframe
                            className="w-full h-full"
                            /* Changed to youtube-nocookie.com */
                            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`} 
                            title={currentVideo.title}
                            frameBorder="0"
                            loading="lazy"
                            rel="0"
                            modestbranding="1"
                            referrerPolicy
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="mt-4 bg-white p-3 rounded-xl border border-gray-100">
                        <h1 className="text-xl md:text-2xl font-bold text-slate-800 leading-snug">
                            {currentVideo.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-gray-500 font-medium border-b pb-4">
                            {/* <span>{currentVideo.views}</span>
                            <span>•</span>
                            <span>{currentVideo.date}</span>
                            <span className="ml-auto flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-full text-slate-700">
                                <AccessTimeIcon style={{ fontSize: 13 }} />
                                {currentVideo.time}
                            </span> */}
                        </div>

                        <div className="mt-4 text-md text-slate-600">
                            <p className="font-semibold text-slate-700 mb-2">Description</p>
                            {currentVideo.description}
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: "Up Next" Sidebar */}
                <div className="space-y-4">
                    <h2 className="text-sm font-bold text-slate-700 tracking-wide uppercase px-1 flex items-center gap-2">
                        <Clapperboard className="w-4 h-4 text-gray-500" /> {/* 3. Icon element */}
                        {t('home.related_videos')}
                    </h2>
                    
                    <div className="flex flex-col gap-3">
                        {recommendedVideos.map((video) => (
                            <div 
                                key={video.id}
                                onClick={() => navigate(`/watch/${video.youtubeId}`)}
                                className="flex gap-3 bg-white p-2 rounded-xl border border-gray-100 shadow-sm hover:shadow-md cursor-pointer transition-all duration-200 group"
                            >
                                <div className="relative w-40 h-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                                    <img
                                        src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                                        alt={video.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[10px] px-1 rounded font-medium">
                                        {video.time}
                                    </span>
                                </div>

                                <div className="flex flex-col justify-between py-0.5">
                                    <div>
                                        <h3 className="text-md font-semibold leading-snug text-gray-700 group-hover:text-[#0a96a4] transition-colors line-clamp-1">
                                            {video.title}
                                        </h3>
                                        <h3 className="text-sm leading-snug text-gray-500 group-hover:text-[#0a96a4] transition-colors line-clamp-2">
                                            {video.description}
                                        </h3>
                                        <p className="text-[11px] text-gray-400 mt-1">{video.views}</p>
                                    </div>
                                    <p className="text-[11px] text-gray-400">
                                        {formatDynamicDate(video.date)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}