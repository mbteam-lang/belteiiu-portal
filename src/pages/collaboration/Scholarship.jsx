import { useState } from 'react';
import { FiChevronDown} from 'react-icons/fi';
import usePageTitle from '@/hooks/usePageTitle';
import { useCollaboration } from '@/hooks/useCollaboration';
import NoData from '@/components/common/Nodata';

export default function Scholarship() {
    usePageTitle('អាហារូបករណ៍', 'Scholarship');
    const { collaboration, loading } = useCollaboration(3);
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (index) => {
        setExpandedId(expandedId === index ? null : index);
    };

    return (
        <div className="max-w-7xl m-auto p-2 md:p-4 font-sans mb-32 min-h-screen">
            {loading && (
                Array.from({ length: 2 }).map((_, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-between bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-lg shadow-sm px-4 py-3 animate-pulse mt-3"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-24 h-12 bg-gray-200 dark:bg-slate-700 rounded" />
                            <div className="h-4 w-32 bg-gray-200 dark:bg-slate-700 rounded" />
                        </div>
                        <div className="w-6 h-6 bg-gray-200 dark:bg-slate-700 rounded-full" />
                    </div>
                ))
            )}
            {!loading && collaboration.length===0 &&(
                <NoData/>
            )}
            {(collaboration.map((item, index) => (
                <div key={index} className="mb-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-gray-100 dark:border-slate-700">
                    {/* HEADER */}
                    <div
                        onClick={() => toggleExpand(index)}
                        className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700/60 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-16 md:h-14 md:w-24 bg-blue-900 text-white flex items-center justify-center text-xs rounded-sm shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden">
                                <img src={item.image} alt="Logo" className="object-cover w-full h-full" />
                            </div>
                            <span className="text-md md:text-lg font-medium text-gray-800 dark:text-slate-100">
                                {item.country}
                            </span>
                        </div>
                        <FiChevronDown className={`text-xl transition-transform duration-300 text-gray-700 dark:text-slate-200 ${expandedId === index ? 'rotate-180' : '' }`}
                        />
                    </div>

                    {/* Expended list */}
                    <div className={`overflow-hidden transition-all duration-300 ${expandedId === index ? 'max-h-[3000px] opacity-100 mt-2 p-2' : 'max-h-0 opacity-0' }`} >
                        <div className="border-t border-l border-gray-400 dark:border-slate-700">

                            {item.collaborations?.map((school, idx) => (
                                <div
                                    key={school.id || idx}
                                    className="grid grid-cols-12 border-b border-gray-400 dark:border-slate-700 bg-white dark:bg-slate-800 min-h-[80px]"
                                >
                                    <div className="col-span-1 border-r border-gray-400 dark:border-slate-700 flex items-center justify-center p-1">
                                        <span className="text-[10px] md:text-base font-bold text-gray-700 dark:text-slate-200">
                                            {idx + 1}
                                        </span>
                                    </div>

                                    <div className="col-span-3 border-r border-gray-400 dark:border-slate-700 flex items-center justify-center p-1 text-center">
                                        <a
                                            href={school.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-blue-800 dark:hover:text-cyan-400 text-gray-800 dark:text-slate-100"
                                        >
                                            <h3 className="text-[9px] md:text-sm font-bold leading-tight">
                                                {school.title}
                                            </h3>
                                        </a>
                                    </div>

                                    <div className="col-span-5 border-r border-gray-400 dark:border-slate-700 flex items-center p-2 md:p-3">
                                        <p className="text-[9px] md:text-sm text-gray-800 dark:text-slate-300">
                                            {school.remark || "N/A"}
                                        </p>
                                    </div>

                                    <div className="col-span-3 flex items-center justify-center p-1 border-r border-gray-400 dark:border-slate-700">
                                        {school.image ? (
                                            <img
                                                src={school.image}
                                                alt={school.title}
                                                className="w-full h-14 md:h-24 object-cover border border-gray-300 dark:border-slate-700"
                                            />
                                        ) : (
                                            <div className="w-full h-14 md:h-24 bg-gray-100 dark:bg-slate-700 flex items-center justify-center text-xs text-gray-400 dark:text-slate-400">
                                                No Image
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )))}
        </div>
    );
}