
import { Link } from 'react-router-dom';
import usePageTitle from '@/hooks/usePageTitle';
import { useWorldWideELibrary } from '@/hooks/useWorldWideElibrary'; 
import ListCard from '@/components/common/Card';


export default function Elibrary() {
    usePageTitle('WORLD WIDE E-LIBRARY', 'WORLD WIDE E-LIBRARY');
    const { worldWideElibrary, loading } = useWorldWideELibrary();

    return (
        <>
           <div className='flex flex-col gap-3 p-3 md:p-6 lg:p-8 max-w-7xl m-auto min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-200'>
                {loading ? (
                    Array.from({ length: 6 }).map((_, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-lg shadow-sm px-4 py-3 animate-pulse"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gray-200 dark:bg-slate-700 rounded" />
                                <div className="h-4 w-32 bg-gray-200 dark:bg-slate-700 rounded" />
                            </div>
                            <div className="w-6 h-6 bg-gray-200 dark:bg-slate-700 rounded-full" />
                        </div>
                    ))
                ) : (
                    worldWideElibrary.map((items) => (
                        <Link key={items.id} to={items.title === "OTHER LIBRARIES" ? "/Other_Library" : items.url} rel="noopener noreferrer" className="flex py-1">
                                <ListCard
                                    images={items.image}
                                    title = {items.title}
                                />
                        </Link>
                    )))}
            </div>
        </>
    );
}


