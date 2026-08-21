import { useLocation, useParams, Link } from 'react-router-dom';
import YouTubePlayer from '@/components/common/YouTubePlayer';
import usePageTitle from '@/hooks/usePageTitle';
import { useAbout } from '@/hooks/useAbout';

export default function HistoryDetails() {
    const { id } = useParams();
    const location = useLocation();
    const videoId = location.state?.video;
    usePageTitle('លម្អិត', 'Details');
    const { details, loading } = useAbout(id);
    return (
        <>
            {loading && (
                <div className="p-4 text-center text-gray-500 dark:text-slate-400">
                    Loading...
                </div>
            )}
            {details.length === 0 && !loading && (
                <div className="p-4 text-center text-gray-500 dark:text-slate-400">
                    No data available
                </div>
            )}
            <div className="flex flex-col gap-3 p-2  m-auto min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-200">
                {videoId && (
                    <div className="w-full mb-2">
                        <YouTubePlayer videoId={videoId} />
                    </div>
                )}
                {details?.map((history) => (
                    <Link
                        key={history.id}
                        to={`/award/${history.id}`}
                        className="flex items-center justify-between bg-white dark:bg-[#353535] border border-gray-100 dark:border-slate-700 rounded-xl shadow-sm px-4 py-3 hover:shadow-md transition-all"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-slate-700/60 rounded-lg flex items-center justify-center p-1 shrink-0 border border-gray-100 dark:border-slate-700 overflow-hidden">
                                <img
                                    src={history.image}
                                    alt={history.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="md:text-lg text-md font-normal text-gray-800 dark:text-slate-100 line-clamp-2">
                                {history.title}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}