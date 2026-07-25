import { Link } from 'react-router-dom';
import usePageTitle from '@/hooks/usePageTitle';
import { useMainDegree } from '@/hooks/useMainDegree';
import ListCard from '@/components/common/Card';

export default function List_Main() {
    usePageTitle('កម្មវិធីសិក្សា', 'Main Degree');
    const {mainDegree, loading } = useMainDegree();

    return (
        <>
           <div className='grid grid-cols-1 md:gap-1 p-4 md:space-y-0 max-w-7xl m-auto'>
                {loading ? (
                    Array.from({ length: 4 }).map((_, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between bg-white rounded-lg shadow-sm px-4 py-3 animate-pulse"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gray-200 rounded" />
                                <div className="h-4 w-32 bg-gray-200 rounded" />
                            </div>
                            <div className="w-6 h-6 bg-gray-200 rounded-full" />
                        </div>
                    ))
                ) : (
                    mainDegree.map((intensive) => (
                        <Link key={intensive.id} to={intensive.url} rel="noopener noreferrer" className=" pt-1">
                            <ListCard
                                images={intensive.image}
                                title={intensive.title}
                            />
                        </Link>
                    ))
                )}
            </div>
        </>
    );
}


