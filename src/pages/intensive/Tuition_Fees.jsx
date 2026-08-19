import React, { useEffect } from 'react';
import usePageTitle from '@/hooks/usePageTitle';
import { useTranslation } from 'react-i18next';
import p1Img from '@/assets/images/p1.png';
import { natData, interData, masterData, civilData } from '@/data/tuitionFees';

export default function Tuition_Fees() {
    const { t } = useTranslation();

    usePageTitle('តម្លៃសិក្សា', 'Tuition Fees');

    // Enable mobile browser pinch-to-zoom ONLY on Tuition_Fees page
    useEffect(() => {
        const metaViewport = document.querySelector('meta[name="viewport"]');
        const originalContent = metaViewport ? metaViewport.getAttribute('content') : '';

        if (metaViewport) {
            metaViewport.setAttribute(
                'content',
                'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes'
            );
        }

        return () => {
            if (metaViewport && originalContent) {
                metaViewport.setAttribute('content', originalContent);
            }
        };
    }, []);

    const renderFacultyTitle = (text) => {
        if (!text) return null;

        // Only break titles that run out of space (> 28 chars)
        if (text.length > 28) {
            if (text.includes(' and ')) {
                const parts = text.split(' and ');
                return (
                    <>
                        {parts[0]} <br className="block md:hidden" />
                        and {parts.slice(1).join(' and ')}
                    </>
                );
            }
            if (text.includes(' និង ')) {
                const parts = text.split(' និង ');
                return (
                    <>
                        {parts[0]} <br className="block md:hidden" />
                        និង {parts.slice(1).join(' និង ')}
                    </>
                );
            }
            if (text.includes('និង')) {
                const parts = text.split('និង');
                return (
                    <>
                        {parts[0]} <br className="block md:hidden" />
                        និង{parts.slice(1).join('និង')}
                    </>
                );
            }
        }

        return text;
    };

    // Helper to render 90-degree rotated semester header cell on small screens, and normal text on md/lg
    const renderSemesterTh = (textKey, bgClass = 'bg-white dark:bg-[#353535]') => (
        <th className={`px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center ${bgClass} align-middle h-14 sm:h-16 md:h-7 overflow-hidden`}>
            <div className="flex items-center justify-center h-full w-full">
                <span className="inline-block -rotate-90 md:rotate-0 whitespace-nowrap text-[7.5px] sm:text-[8.5px] lg:text-[10px] font-semibold text-gray-700 dark:text-slate-200 transform md:transform-none leading-none">
                    {t(`tuition.${textKey}`)}
                </span>
            </div>
        </th>
    );

    const renderTables = () => (
        <div className="space-y-4 sm:space-y-6">
            {/* Section I: Bachelor & Associate Degree Programs */}
            <h2 className="text-md sm:text-lg md:text-xl font-bold text-gray-700 dark:text-white px-1">
                ✦ {t('tuition.js_bachelor_associate ')}
            </h2>

            {/* Subsection I-1: National Program */}
            <div className="text-start px-1 sm:px-4 pt-2 sm:pt-4">
                <h1 className="text-sm sm:text-md md:text-lg font-semibold text-[#151B74] dark:text-cyan-400">
                    I- {t('tuition.js_nat_tuition')}
                </h1>
            </div>

            {/* Table 1: National Program Table */}
            <div className="bg-white dark:bg-[#353535] border border-gray-100 dark:border-slate-700 overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-slate-700 text-center table-fixed">
                    <thead>
                        {/* Year Headers */}
                        <tr className="border-b border-gray-300 dark:border-slate-700">
                            <th
                                rowSpan={2}
                                className="w-[32%] md:w-[35%] align-middle text-center px-2 py-2 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-xs md:text-base font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-[#353535] leading-tight relative z-10"
                            >
                                {t('tuition.js_faculty')}
                            </th>
                            <th colSpan={2} className="w-[13.6%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-[#353535]">
                                {t('tuition.js_year1')}
                            </th>
                            <th colSpan={2} className="w-[13.6%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-[#353535]">
                                {t('tuition.js_year2')}
                            </th>
                            <th colSpan={2} className="w-[13.6%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-[#f4f7e6] dark:bg-slate-700/80">
                                {t('tuition.js_year3')}
                            </th>
                            <th colSpan={2} className="w-[13.6%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-[#f4f7e6] dark:bg-slate-700/80">
                                {t('tuition.js_year4')}
                            </th>
                            <th colSpan={2} className="w-[13.6%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-[#f4f7e6] dark:bg-slate-700/80">
                                {t('tuition.js_year5')}
                            </th>
                        </tr>

                        {/* Semester Sub-Headers */}
                        <tr className="border-b border-gray-300 dark:border-slate-700 h-14 sm:h-16 md:h-7">
                            {renderSemesterTh('js_semester1')}
                            {renderSemesterTh('js_semester2')}
                            {renderSemesterTh('js_semester1')}
                            {renderSemesterTh('js_semester2')}
                            {renderSemesterTh('js_semester1', 'bg-[#f4f7e6] dark:bg-slate-700/80')}
                            {renderSemesterTh('js_semester2', 'bg-[#f4f7e6] dark:bg-slate-700/80')}
                            {renderSemesterTh('js_semester1', 'bg-[#f4f7e6] dark:bg-slate-700/80')}
                            {renderSemesterTh('js_semester2', 'bg-[#f4f7e6] dark:bg-slate-700/80')}
                            {renderSemesterTh('js_semester1', 'bg-[#f4f7e6] dark:bg-slate-700/80')}
                            {renderSemesterTh('js_semester2', 'bg-[#f4f7e6] dark:bg-slate-700/80')}
                        </tr>
                    </thead>

                    {/* National Table Body */}
                    <tbody>
                        {natData.map((row) => (
                            <tr key={row.key} className="hover:bg-blue-50 dark:hover:bg-slate-700/50 border-b border-gray-300 dark:border-slate-700">
                                <td className="px-1 py-2 border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-[#353535] text-left align-middle">
                                    <div className="md:px-3 text-[8px] sm:text-[10px] lg:text-[16px] font-medium text-[#151B74] dark:text-cyan-300 leading-normal break-words">
                                        {renderFacultyTitle(t(`tuition.${row.key}`))}
                                    </div>
                                </td>
                                <td colSpan={4} className="px-0.5 py-2 text-[9px] sm:text-xs md:text-[15px] border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-[#353535] dark:text-slate-200 align-middle">
                                    {row.fee1}
                                </td>
                                <td colSpan={4} className="px-0.5 py-2 text-[9px] sm:text-xs md:text-[15px] border-r border-gray-300 dark:border-slate-700 bg-[#f4f7e6] dark:bg-slate-700/70 dark:text-slate-200 align-middle">
                                    {row.fee2}
                                </td>
                                <td colSpan={2} className="px-0.5 py-2 text-[9px] sm:text-xs md:text-[15px] border-r border-gray-300 dark:border-slate-700 bg-[#f4f7e6] dark:bg-slate-700/70 dark:text-slate-200 align-middle">
                                    {row.fee3 || '-'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Subsection I-2: International Program */}
            <div className="text-start px-1 sm:px-4 pt-2 sm:pt-4">
                <h1 className="text-sm sm:text-md md:text-lg font-semibold text-[#151B74] dark:text-cyan-400">
                    II- {t('tuition.js_inter_tuition')}
                </h1>
            </div>

            {/* Table 2: International Program Table */}
            <div className="bg-white dark:bg-[#353535] border border-gray-100 dark:border-slate-700 overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-slate-700 text-center table-fixed">
                    <thead>
                        <tr className="border-b border-gray-300 dark:border-slate-700">
                            <th
                                rowSpan={2}
                                className="w-[32%] md:w-[35%] align-middle text-center px-2 py-2 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-xs md:text-base font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-[#353535] leading-tight relative z-10"
                            >
                                {t('tuition.js_faculty')}
                            </th>
                            <th colSpan={2} className="w-[17%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-[#353535]">
                                {t('tuition.js_year1')}
                            </th>
                            <th colSpan={2} className="w-[17%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-[#353535]">
                                {t('tuition.js_year2')}
                            </th>
                            <th colSpan={2} className="w-[17%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-[#f4f7e6] dark:bg-slate-700/80">
                                {t('tuition.js_year3')}
                            </th>
                            <th colSpan={2} className="w-[17%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-[#f4f7e6] dark:bg-slate-700/80">
                                {t('tuition.js_year4')}
                            </th>
                        </tr>

                        <tr className="border-b border-gray-300 dark:border-slate-700 h-14 sm:h-16 md:h-7">
                            {renderSemesterTh('js_semester1')}
                            {renderSemesterTh('js_semester2')}
                            {renderSemesterTh('js_semester1')}
                            {renderSemesterTh('js_semester2')}
                            {renderSemesterTh('js_semester1', 'bg-[#f4f7e6] dark:bg-slate-700/80')}
                            {renderSemesterTh('js_semester2', 'bg-[#f4f7e6] dark:bg-slate-700/80')}
                            {renderSemesterTh('js_semester1', 'bg-[#f4f7e6] dark:bg-slate-700/80')}
                            {renderSemesterTh('js_semester2', 'bg-[#f4f7e6] dark:bg-slate-700/80')}
                        </tr>
                    </thead>

                    <tbody>
                        {interData.map((row) => (
                            <tr key={row.key} className="hover:bg-blue-50 dark:hover:bg-slate-700/50 border-b border-gray-300 dark:border-slate-700">
                                <td className="px-1 py-2 border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-[#353535] text-left align-middle">
                                    <div className="md:px-3 text-[8px] sm:text-[10px] lg:text-[16px] font-medium text-[#151B74] dark:text-cyan-300 leading-normal break-words">
                                        {renderFacultyTitle(t(`tuition.${row.key}`))}
                                    </div>
                                </td>
                                <td colSpan={4} className="px-0.5 py-2 text-[9px] sm:text-xs md:text-[15px] border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-[#353535] dark:text-slate-200 align-middle">
                                    {row.fee1}
                                </td>
                                <td colSpan={4} className="px-0.5 py-2 text-[9px] sm:text-xs md:text-[15px] border-r border-gray-300 dark:border-slate-700 bg-[#f4f7e6] dark:bg-slate-700/70 dark:text-slate-200 align-middle">
                                    {row.fee2}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Section II: Master & Doctoral Degree Programs */}
            <h2 className="text-sm sm:text-md md:text-lg font-bold text-gray-700 dark:text-white px-1 pt-2">
                ✦ {t('tuition.js_master_doctoral')}
            </h2>

            <div className="text-start px-1 sm:px-4 pt-2 sm:pt-4">
                <h1 className="text-sm sm:text-md md:text-lg font-semibold text-[#151B74] dark:text-cyan-400">
                    I- {t('tuition.js_inter_tuition')}
                </h1>
            </div>

            {/* Table 3: Master & Doctoral Table */}
            <div className="bg-white dark:bg-[#353535] border border-gray-100 dark:border-slate-700 overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-slate-700 text-center table-fixed">
                    <thead>
                        <tr className="border-b border-gray-300 dark:border-slate-700">
                            <th
                                rowSpan={2}
                                className="w-[28%] md:w-[34%] align-middle text-center px-2 py-2 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-xs md:text-base font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-[#353535] leading-tight relative z-10"
                            >
                                {t('tuition.academic_degree')}
                            </th>
                            <th colSpan={2} className="w-[24%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-[#353535]">
                                {t('tuition.js_year1')}
                            </th>
                            <th colSpan={2} className="w-[24%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-[#353535]">
                                {t('tuition.js_year2')}
                            </th>
                            <th colSpan={2} className="w-[24%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-[#353535]">
                                {t('tuition.js_year3')}
                            </th>
                        </tr>

                        <tr className="border-b border-gray-300 dark:border-slate-700 h-14 sm:h-16 md:h-7">
                            {renderSemesterTh('js_semester1')}
                            {renderSemesterTh('js_semester2')}
                            {renderSemesterTh('js_semester1')}
                            {renderSemesterTh('js_semester2')}
                            {renderSemesterTh('js_semester1')}
                            {renderSemesterTh('js_semester2')}
                        </tr>
                    </thead>

                    <tbody>
                        {masterData.map((row) => (
                            <tr key={row.key} className="hover:bg-blue-50 dark:hover:bg-slate-700/50 border-b border-gray-300 dark:border-slate-700">
                                <td className="px-1 py-2 border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-[#353535] text-left align-middle">
                                    <div className="md:px-3 text-[8px] sm:text-[10px] lg:text-[16px] font-medium text-[#151B74] dark:text-cyan-300 leading-normal break-words">
                                        {renderFacultyTitle(t(`tuition.${row.key}`))}
                                    </div>
                                </td>
                                <td colSpan={1} className="px-0.5 py-2 text-[9px] sm:text-xs md:text-[15px] border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-[#353535] dark:text-slate-200 align-middle">
                                    {row.fee1}
                                </td>
                                <td colSpan={1} className="px-0.5 py-2 text-[9px] sm:text-xs md:text-[15px] border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-[#353535] dark:text-slate-200 align-middle">
                                    {row.fee1}
                                </td>
                                <td colSpan={1} className="px-0.5 py-2 text-[9px] sm:text-xs md:text-[15px] border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-[#353535] dark:text-slate-200 align-middle">
                                    {row.fee2}
                                </td>
                                <td colSpan={1} className="px-0.5 py-2 text-[9px] sm:text-xs md:text-[15px] border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-[#353535] dark:text-slate-200 align-middle">
                                    {row.fee2}
                                </td>
                                <td colSpan={1} className="px-0.5 py-2 text-[9px] sm:text-xs md:text-[15px] border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-[#353535] dark:text-slate-200 align-middle">
                                    {row.fee3}
                                </td>
                                <td colSpan={1} className="px-0.5 py-2 text-[9px] sm:text-xs md:text-[15px] border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-[#353535] dark:text-slate-200 align-middle">
                                    {row.fee3}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Section III: Faculty of Civil Aviation */}
            <div className="flex flex-row justify-between items-center px-1 sm:px-4 pt-2 sm:pt-4">
                <h1 className="text-sm sm:text-md md:text-lg font-semibold text-[#151B74] dark:text-cyan-400">
                    II- {t('tuition.faculty_civil')}
                </h1>
                <img src={p1Img} alt="Civil Aviation Airplane" className="h-6 sm:h-8 md:h-10 w-auto object-contain" />
            </div>

            {/* Table 4: Civil Aviation Table */}
            <div className="bg-white dark:bg-[#353535] border border-gray-100 dark:border-slate-700 overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-slate-700 text-center table-fixed">
                    <thead>
                        <tr className="border-b border-gray-300 dark:border-slate-700">
                            <th
                                rowSpan={2}
                                className="w-[24%] md:w-[28%] align-middle text-center px-2 py-2 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-xs md:text-base font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-[#353535] leading-tight relative z-10"
                            >
                                {t('tuition.academic_degree')}
                            </th>
                            <th colSpan={2} className="w-[38%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-[#353535]">
                                {t('tuition.js_year1')}
                            </th>
                            <th colSpan={2} className="w-[38%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-[#353535]">
                                {t('tuition.js_year2')}
                            </th>
                        </tr>

                        <tr className="border-b border-gray-300 dark:border-slate-700 h-14 sm:h-16 md:h-7">
                            {renderSemesterTh('js_semester1')}
                            {renderSemesterTh('js_semester2')}
                            {renderSemesterTh('js_semester1')}
                            {renderSemesterTh('js_semester2')}
                        </tr>
                    </thead>

                    <tbody>
                        {civilData.map((row) => (
                            <tr key={row.key} className="hover:bg-blue-50 dark:hover:bg-slate-700/50 border-b border-gray-300 dark:border-slate-700">
                                <td className="px-1 py-2 border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-[#353535] text-left align-middle">
                                    <div className="md:px-3 text-[8px] sm:text-[10px] lg:text-[16px] font-medium text-[#151B74] dark:text-cyan-300 leading-normal break-words">
                                        {renderFacultyTitle(t(`tuition.${row.key}`))}
                                    </div>
                                </td>
                                <td colSpan={1} className="px-0.5 py-2 text-[9px] sm:text-xs md:text-[15px] border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-[#353535] dark:text-slate-200 align-middle">
                                    {row.fee1}
                                </td>
                                <td colSpan={1} className="px-0.5 py-2 text-[9px] sm:text-xs md:text-[15px] border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-[#353535] dark:text-slate-200 align-middle">
                                    {row.fee1}
                                </td>
                                <td colSpan={1} className="px-0.5 py-2 text-[9px] sm:text-xs md:text-[15px] border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-[#353535] dark:text-slate-200 align-middle">
                                    {row.fee2}
                                </td>
                                <td colSpan={1} className="px-0.5 py-2 text-[9px] sm:text-xs md:text-[15px] border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-[#353535] dark:text-slate-200 align-middle">
                                    {row.fee2}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div className="bg-[#F8FAFC] dark:bg-[#282828] min-h-screen py-2 sm:py-6 px-1 sm:px-4 transition-colors duration-200 select-none">
            <div className="w-full max-w-7xl mx-auto space-y-3 sm:space-y-5">
                {/* Header Title */}
                <div className="pt-3 sm:pt-6 md:px-3">
                    <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[#151B74] dark:text-cyan-400 tracking-wide">
                        {t('tuition.js_tuition_fee')}
                    </h1>
                </div>

                {/* Table Content */}
                <div className="w-full overflow-x-auto">
                    {renderTables()}
                </div>
            </div>
        </div>
    );
}