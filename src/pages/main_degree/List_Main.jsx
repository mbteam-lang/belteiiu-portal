import { Link } from 'react-router-dom';
import usePageTitle from '@/hooks/usePageTitle';
import { useMainDegree } from '@/hooks/useMainDegree';
import ListCard from '@/components/common/Card';

export default function List_Main() {
    usePageTitle('កម្មវិធីសិក្សា', 'Main Degree');
    const { mainDegree, loading } = useMainDegree();

    return (
        <div className="w-full min-h-screen p-4 text-slate-800 dark:text-slate-100 transition-colors duration-200">
            <div className="grid grid-cols-1 gap-2 lg:max-w-7xl mx-auto items-start content-start">
                {
                    mainDegree.map((intensive) => (
                        <Link key={intensive.id} to={intensive.url} rel="noopener noreferrer" className="block">
                            <ListCard
                                images={intensive.image}
                                title={intensive.title}
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}