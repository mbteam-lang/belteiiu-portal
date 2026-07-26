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
                <div className="p-4 text-center text-gray-500">
                    Loading...
                </div>
            )}
            {details.length === 0 && !loading && (
                <div className="p-4 text-center text-gray-500">
                    No data available
                </div>
            )}
            <div className="grid grid-cols-1 md:gap-2 p-1 space-y-2 p-2 md:w-8/12 m-auto">
                {videoId && (
                    <div className="w-full mb-2">
                        <YouTubePlayer videoId={videoId} />
                    </div>
                )}
                {details?.map((history) => (
                    <Link
                        key={history.id}
                        to={`/award/${history.id}`}
                        className="flex items-center justify-between bg-white rounded-lg shadow-sm px-4 py-3"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={history.image}
                                alt={history.title}
                                className="w-20 h-20 object-contain"
                            />
                            <span className="md:text-base text-sm font-normal text-gray-800 line-clamp-2">
                                {history.title}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}