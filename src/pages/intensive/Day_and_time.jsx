import usePageTitle from '@/hooks/usePageTitle';
import { useTranslation } from 'react-i18next';

export default function Day_And_Time() {
    const { t } = useTranslation();
    usePageTitle(' ថ្ងៃ និងម៉ោងសិក្សា', 'Day and time');

    return (
        <>
            <div className='min-h-screen py-8 bg-slate-50/30 dark:bg-slate-900 transition-colors duration-200'>
                <section className='max-w-7xl m-auto md:px-6 px-4 space-y-3 md:space-y-4'>
                    
                    {/* Header Title Section */}
                    <div className='flex items-center gap-3 border-b border-slate-200 dark:border-slate-700 pb-4'>
                        <div className="w-2.5 h-6 rounded-full bg-[#0a96a4]" />
                        <h1 className='text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100'>
                            {t('tuition.js_shedule')}
                        </h1>
                    </div>

                    {/* TABLE 1: Monday - Friday */}
                    <div className="space-y-3">
                        <div className="overflow-x-auto bg-white dark:bg-slate-800 rounded-lg shadow border border-slate-200 dark:border-slate-700">
                            {/* Added border-collapse and w-full */}
                            <table className="w-full border-collapse text-sm md:text-base text-slate-600 dark:text-slate-300 min-w-[320px] sm:min-w-[450px]">
                                <thead>
                                    <tr>
                                        {/* Placed background and text classes clearly within the <th> cells */}
                                        <th className="px-4 md:px-6 py-4 font-semibold text-center text-white bg-[#0a96a4] rounded-tl-lg w-1/2 min-w-[140px]">
                                            {t('tuition.js_mon_fri')}
                                        </th>
                                        <th className="px-4 md:px-6 py-4 font-semibold text-center text-white bg-[#0a96a4] rounded-tr-lg w-1/2 min-w-[140px]">
                                            {t('tuition.js_time')}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                    {[
                                        { label: 'tuition.js_morning', time: '08:00 AM - 11:15 AM' },
                                        { label: 'tuition.js_afternoon', time: '02:00 PM - 05:15 PM' },
                                        { label: 'tuition.js_evening', time: '05:30 PM - 08:30 PM' }
                                    ].map((row, idx) => (
                                        <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-700/50 transition-colors">
                                            <td className="px-4 md:px-6 py-4 text-center border-r border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium">{t(row.label)}</td>
                                            <td className="px-4 md:px-6 py-4 text-center text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base tracking-wide whitespace-nowrap">{row.time}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* TABLE 2: Saturday - Sunday */}
                    <div className="space-y-3">
                        <div className="overflow-x-auto bg-white dark:bg-slate-800 rounded-lg shadow border border-slate-200 dark:border-slate-700">
                            {/* Added border-collapse and w-full */}
                            <table className="w-full border-collapse text-sm md:text-base text-slate-600 dark:text-slate-300 min-w-[320px] sm:min-w-[450px]">
                                <thead>
                                    <tr>
                                        {/* Placed background and text classes clearly within the <th> cells */}
                                        <th className="px-4 md:px-6 py-4 font-semibold text-center text-white bg-[#0a96a4] rounded-tl-lg w-1/2 min-w-[140px]">
                                            {t('tuition.js_sat_sun')}
                                        </th>
                                        <th className="px-4 md:px-6 py-4 font-semibold text-center text-white bg-[#0a96a4] rounded-tr-lg w-1/2 min-w-[140px]">
                                            {t('tuition.js_time')}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                    {/* Saturday Rows */}
                                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/50 transition-colors">
                                        <td className="px-4 md:px-6 py-4 text-center text-slate-700 dark:text-slate-200 font-medium border-r border-slate-100 dark:border-slate-700" rowSpan="2">
                                            {t('tuition.js_staturday')}
                                        </td>
                                        <td className="px-4 md:px-6 py-4 text-center text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base tracking-wide whitespace-nowrap">08:00 AM - 11:30 AM</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/50 transition-colors">
                                        <td className="px-4 md:px-6 py-4 text-center text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base tracking-wide whitespace-nowrap border-l border-slate-100 dark:border-slate-700">01:30 PM - 05:30 PM</td>
                                    </tr>

                                    {/* Sunday Rows */}
                                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/50 transition-colors border-t border-slate-100 dark:border-slate-700">
                                        <td className="px-4 md:px-6 py-4 text-center text-slate-700 dark:text-slate-200 font-medium border-r border-slate-100 dark:border-slate-700" rowSpan="2">
                                            {t('tuition.js_sunday')}
                                        </td>
                                        <td className="px-4 md:px-6 py-4 text-center text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base tracking-wide whitespace-nowrap">08:00 AM - 11:30 AM</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/50 transition-colors">
                                        <td className="px-4 md:px-6 py-4 text-center text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base tracking-wide whitespace-nowrap border-l border-slate-100 dark:border-slate-700">01:30 PM - 05:30 PM</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Intake Info Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 pt-2 md:pt-4">
                        <div className="bg-white dark:bg-slate-800 p-4 md:p-5 border border-gray-200 dark:border-slate-700 rounded-lg text-center font-medium text-slate-700 dark:text-slate-200 text-xs sm:text-sm md:text-base shadow hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors">
                            💡 {t('tuition.js_first_int')}
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 md:p-5 border border-gray-200 dark:border-slate-700 rounded-lg text-center font-medium text-slate-700 dark:text-slate-200 text-xs sm:text-sm md:text-base shadow hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors">
                            📅 {t('tuition.js_second_int')}
                        </div>
                    </div>

                </section>
            </div>
        </>
    );
}