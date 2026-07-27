
import { Link } from 'react-router-dom';
import usePageTitle from '@/hooks/usePageTitle';
import { useAbout } from '@/hooks/useAbout';
import ListCard from '@/components/common/Card';

export default function Index() {
    usePageTitle('ប្រវត្តិ និងទីតាំង', 'History & Location');
    const { about, loading } = useAbout();
    return (
        <>
            <div className="grid grid-cols-1 md:gap-2 p-4 md:space-y-0 space-y-2 max-w-7xl m-auto">
                {loading ? (
                    Array.from({ length: 8 }).map((_, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between bg-white rounded-lg shadow-sm px-4 py-3 animate-pulse"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gray-200 rounded" />
                                <div className="h-4 w-32 bg-gray-200 rounded" />
                            </div>
                        </div>
                    ))
                ) : (
                    about.map((history) => (
                        <Link
                            key={history.id}
                            to={
                                history.url
                                    ? history.url
                                    : `/history_detail/${history.id}`
                            }
                            state={{ video: history.video }}
                            rel="noopener noreferrer"
                        >
                            <ListCard
                                images = {history.image}
                                title = {history.title}
                            />
                        </Link>
                    )))}
            </div>
        </>
    );
}
