import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import usePageTitle from '@/hooks/usePageTitle';
import { useCollaboration } from '@/hooks/useCollaboration';
import NoData from '@/components/common/Nodata';

export default function International_Collaboration() {
    usePageTitle('កិច្ចសហប្រតិបត្តិការអន្តរជាតិ', 'International Collaboration');
    const { collaboration, loading } = useCollaboration(2);
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex((prev) => (prev === index ? null : index));
    };

    return (
        <div className="max-w-7xl m-auto p-2 md:p-4 font-sans mb-32 select-none min-h-screen">
            {loading ? (
                Array.from({ length: 2 }).map((_, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-between bg-white dark:bg-[#353535] border border-gray-100 dark:border-slate-700 rounded-lg shadow-sm px-4 py-3 animate-pulse mt-3"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-24 h-12 bg-gray-200 dark:bg-slate-700 rounded" />
                            <div className="h-4 w-32 bg-gray-200 dark:bg-slate-700 rounded" />
                        </div>
                        <div className="w-6 h-6 bg-gray-200 dark:bg-slate-700 rounded-full" />
                    </div>
                ))
            ) : collaboration.length > 0 ? (
                /* DATA LIST */
                collaboration.map((country, index) => (
                    <div
                        key={country.id ?? country.country ?? index}
                        className="mb-2 rounded-lg bg-white dark:bg-[#353535] shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden"
                    >
                        <div
                            onClick={() => toggleExpand(index)}
                            className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700/60 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={country.image}
                                    alt={country.country}
                                    className="h-10 w-16 md:h-14 md:w-24 object-cover border border-gray-200 dark:border-slate-700 rounded-sm shadow-sm"
                                />
                                <span className="text-md md:text-lg font-medium text-gray-800 dark:text-slate-100">
                                    {country.country}
                                </span>
                            </div>
                            <FiChevronDown
                                className={`text-xl transition-transform duration-300 text-gray-700 dark:text-slate-200 ${expandedIndex === index ? 'rotate-180' : ''
                                    }`}
                            />
                        </div>
                        <div
                            className={`overflow-hidden transition-all duration-300 ${expandedIndex === index
                                    ? 'max-h-[2000px] opacity-100 p-2 border-t border-gray-100 dark:border-slate-700'
                                    : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="border border-gray-200 dark:border-slate-700 overflow-hidden">
                                {(country.collaborations || []).map((item, idx) => (
                                    <div
                                        key={item.id ?? idx}
                                        className="grid grid-cols-12 border-b last:border-b-0 border-gray-200 dark:border-slate-700 bg-white dark:bg-[#353535] min-h-[80px]"
                                    >
                                        <div className="col-span-2 flex items-center justify-center border-r border-gray-200 dark:border-slate-700 font-medium text-gray-600 dark:text-slate-300">
                                            {idx + 1}
                                        </div>
                                        <div className="col-span-5 flex items-center justify-center border-r border-gray-200 dark:border-slate-700 p-2">
                                            <img
                                                src={item.logo}
                                                alt={item.title || 'collaboration logo'}
                                                className="h-10 md:h-14 object-contain"
                                            />
                                        </div>
                                        <div className="col-span-5 flex items-center justify-center p-2">
                                            <img
                                                src={item.image}
                                                alt={item.title || 'collaboration image'}
                                                className="w-full max-w-[220px] h-[90px] md:h-[120px] object-cover"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                /* NO DATA*/
                <NoData />
            )}

        </div>
    );
}