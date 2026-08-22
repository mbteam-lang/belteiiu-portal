import { useState, useEffect } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';
import { useAcademicCategories } from '@/hooks/useAcademic';
import usePageTitle from '@/hooks/usePageTitle';

export default function Academic_Categories() {

    usePageTitle('ការចុះឈ្មោះ', 'Admission');
    const { academicCategories, loading } = useAcademicCategories();
    return (
        <div className="min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-200">
            <div className="grid grid-cols-1 md:gap-3 p-4 md:space-y-0 space-y-2 select-none lg:max-w-7xl m-auto">
                {academicCategories?.map((academic_research) => (
                    <Link key={academic_research.id} to={`/academic_faculties/${academic_research.id}`} rel="noopener noreferrer" className="flex rounded-lg shadow-sm overflow-hidden border border-gray-100 dark:border-slate-700">
                        <div className="bg-white dark:bg-[#353535] flex items-center justify-center p-2 px-4 border-r border-gray-100 dark:border-slate-700">
                            <img
                                src={academic_research.image}
                                alt={academic_research.title}
                                className="md:w-14 md:h-14 w-10 h-10 object-contain"
                            />
                        </div>
                        <div className="w-full flex items-center justify-between px-4 py-3" style={{ background: `linear-gradient(to right, ${academic_research.color})`, }}>
                            <span className="md:text-md text-md font-normal text-white">
                                {academic_research.title}
                            </span>
                            <NavigateNextIcon className="text-white flex-shrink-0" />
                        </div>
                    </Link>
                ))
                }

            </div>
        </div>
    );
}
