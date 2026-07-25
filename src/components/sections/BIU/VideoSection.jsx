import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, Link } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime'; 
import { sharingVideos } from '../../../data/sharingVideo'; // Imported shared list
import { formatDynamicDate } from '@/utils/formatDate';

export default function ServingVideo() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center border-b pb-4">
                    <div className="flex items-center gap-2">
                        <div className="h-7 w-1.5 bg-blue-800 rounded-full"></div>
                        <h1 className="text-xl md:text-2xl font-medium text-slate-800">
                            {t('home.sharing_videos')}
                        </h1>
                    </div>
                    
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {sharingVideos.map((video) => (
                        <div 
                            key={video.id} 
                            onClick={() => navigate(`/watch/${video.youtubeId}`)}
                            className="group flex flex-col justify-between p-3 rounded-2xl border bg-white hover:shadow-xl transition-all duration-300 cursor-pointer"
                        >
                            <div>
                                <div className="relative w-full h-44 overflow-hidden rounded-xl bg-gray-100 shadow-inner">
                                    <img
                                        src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                                        alt={video.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        onError={(e) => {
                                            e.target.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                        <div className="bg-red-600 rounded-full p-3 shadow-md transform scale-90 group-hover:scale-100 transition duration-300 text-white">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 space-y-1.5">
                                    <h3 className="text-md font-medium leading-snug line-clamp-2 text-slate-800 group-hover:text-red-600 transition-colors duration-200">
                                        {video.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 font-medium">
                                        {video.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-between items-center w-full mt-4 pt-3 border-t border-gray-100">
                                <div className="flex items-center gap-1 text-gray-400">
                                    <AccessTimeIcon style={{ fontSize: 14 }} />
                                    <span className="text-sm font-medium">
                                        {video.duration}
                                    </span>
                                </div>
                                <p className="text-gray-400 text-xs font-medium">
                                    {formatDynamicDate(video.date)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}