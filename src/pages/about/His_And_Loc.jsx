
import { Link } from 'react-router-dom';
import usePageTitle from '@/hooks/usePageTitle';
import { useAbout } from '@/hooks/useAbout';
import ListCard from '@/components/common/Card';

export default function Index() {
    usePageTitle('ប្រវត្តិ និងទីតាំង', 'History & Location');
    const { about, loading } = useAbout();
    return (
        <>
            <div className="flex flex-col gap-3 p-4 max-w-7xl m-auto min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-200">
                {about.map((history) => (
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
                ))}
            </div>
        </>
    );
}
