import { useState, useEffect } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link, useParams } from 'react-router-dom';
import { useAcademicFaculty } from '@/hooks/useAcademicFaculty';
import usePageTitle from '@/hooks/usePageTitle';
import NoData from '@/components/common/Nodata';

export default function Academic_Faculty() {
    const { id } = useParams();
    usePageTitle('កិច្ចការស្រាវជ្រាវ', 'Academic Research');
    const { academicFaculty, loading } = useAcademicFaculty(id);

    return (
        <>
            <div className='bg-[#F5F5F5] dark:bg-[#282828] min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-200'>
                <div className='h-3'></div>
                <section className='lg:max-w-7xl m-auto md:px-5 px-2'>
                    {loading ? (
                        Array.from({ length: 5 }).map((_, index) => (
                            <div
                                key={index}
                                className="px-3 mt-3 border shadow rounded-lg flex items-center gap-3 w-full bg-white dark:bg-[#353535] dark:border-slate-700 animate-pulse py-2"
                            >
                                <div className="bg-gray-200 dark:bg-slate-700 rounded-md w-12 h-16 shrink-0" />
                                <div className="h-5 bg-gray-200 dark:bg-slate-700 rounded w-1/2" />
                            </div>
                        ))
                    ) : Array.isArray(academicFaculty) && academicFaculty.length > 0 ? (
                        academicFaculty.map((items, index) => (
                            <Link key={items.id || index} to={`/academic_researches/${items.id}`}>
                                <div
                                    className="px-3 mt-3 border shadow rounded-lg flex items-center gap-3 w-full bg-[#FFFFFF] dark:bg-[#353535] dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer"
                                    style={{ borderColor: items.color || '#e5e7eb' }}
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="bg-white dark:bg-slate-700 rounded-md w-12 h-16 flex justify-center items-center">
                                            <img src={items.image} alt={items.title || ""} className="w-10 h-14 object-contain" />
                                        </div>
                                    </div>
                                    <div className="text-gray-800 dark:text-slate-100 country md:text-lg text-md text-left">
                                        {items.title}
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <NoData />
                    )}
                </section>
                <div className='h-5'></div>
            </div>
        </>
    );
}
