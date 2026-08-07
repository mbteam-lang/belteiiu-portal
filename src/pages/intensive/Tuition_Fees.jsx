import React from 'react';
import usePageTitle from '@/hooks/usePageTitle';
import { useTranslation } from 'react-i18next';
import p1Img from '@/assets/images/p1.png';

export default function Tuition_Fees() {
    const { t } = useTranslation();

    usePageTitle('តម្លៃសិក្សា', 'Tuition Fees');

    // Data Array for National Program Tuition Fees
    const natData = [
        { key: 'js_faculty_1', fee1: '$ 400', fee2: '$ 450', fee3: '' },
        { key: 'js_faculty_2', fee1: '$ 400', fee2: '$ 450', fee3: '' },
        { key: 'js_faculty_3', fee1: '$ 400', fee2: '$ 450', fee3: '' },
        { key: 'js_faculty_4', fee1: '$ 400', fee2: '$ 450', fee3: '' },
        { key: 'js_faculty_5', fee1: '$ 400', fee2: '$ 450', fee3: '' },
        { key: 'js_faculty_6', fee1: '$ 400', fee2: '$ 450', fee3: '' },
        { key: 'js_faculty_7', fee1: '$ 450', fee2: '$ 500', fee3: '' },
        { key: 'js_faculty_8', fee1: '$ 450', fee2: '$ 500', fee3: '' },
        { key: 'js_faculty_9', fee1: '$ 400', fee2: '$ 450', fee3: '$ 450' },
        { key: 'js_faculty_10', fee1: '$ 400', fee2: '$ 450', fee3: '$ 450' }
    ];

    // Data Array for International Program Tuition Fees
    const interData = [
        { key: 'js_faculty_1', fee1: '$ 550', fee2: '$ 600' },
        { key: 'js_faculty_2', fee1: '$ 550', fee2: '$ 600' },
        { key: 'js_faculty_3', fee1: '$ 550', fee2: '$ 600' },
        { key: 'js_faculty_4', fee1: '$ 550', fee2: '$ 600' },
        { key: 'js_faculty_5', fee1: '$ 550', fee2: '$ 600' },
        { key: 'js_faculty_11', fee1: '$ 550', fee2: '$ 600' },
        { key: 'js_faculty_12', fee1: '$ 1,100', fee2: '$ 1,200' },
        { key: 'js_faculty_13', fee1: '$ 550', fee2: '$ 600' },
    ];

    // Data Array for Master & Doctoral Program Tuition Fees
    const masterData = [
        { key: 'js_master_degrees', fee1: '$ 800', fee2: '$ 900' },
        { key: 'js_doctoral_degrees', fee1: '$ 1,300', fee2: '$ 1,500', fee3: '$ 1,700' },
    ];

    // Data Array for Civil Aviation Tuition Fees
    const civilData = [
        { key: 'js_master_degrees', fee1: '$ 1,300', fee2: '$ 1,500' },
    ];

    // Helper function to render mobile line breaks cleanly
    const renderFacultyTitle = (text) => {
        if (!text) return null;
        if (text.includes(' and ')) {
            const parts = text.split(' and ');
            return (
                <>
                    {parts[0]} and <br className="block sm:hidden" />
                    {parts.slice(1).join(' and ')}
                </>
            );
        }
        if (text.includes(' និង ')) {
            const parts = text.split(' និង ');
            return (
                <>
                    {parts[0]} និង <br className="block sm:hidden" />
                    {parts.slice(1).join(' និង ')}
                </>
            );
        }
        return text;
    };

    return (
        <div className="bg-[#F8FAFC] dark:bg-slate-900 min-h-screen py-2 sm:py-6 px-1 sm:px-4 transition-colors duration-200">
            <div className="w-full max-w-7xl mx-auto space-y-3 sm:space-y-5">

                {/* Main Header */}
                <div className="text-start pt-3 sm:pt-6 md:px-3">
                    <div className="relative z-10">
                        <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[#151B74] dark:text-cyan-400 tracking-wide">
                            {t('tuition.js_tuition_fee')}
                        </h1>

                        {/* Divider */}
                        <div className="flex items-center justify-center gap-3 my-1">
                            <span className="w-32 h-[1px] rounded-full bg-gray-300 dark:bg-slate-700"></span>
                        </div>
                    </div>
                </div>

                {/* Section I: Bachelor & Associate Degree Programs */}
                <h2 className="text-md sm:text-lg md:text-xl font-bold text-gray-700 dark:text-slate-300 px-1">
                    ✦ {t('tuition.js_bachelor_associate ')}
                </h2>

                {/* Subsection I-1: National Program */}
                <div className="text-start px-1 sm:px-4 pt-2 sm:pt-4">
                    <h1 className="text-sm sm:text-md md:text-lg font-semibold text-[#151B74] dark:text-cyan-400">
                        I- {t('tuition.js_nat_tuition')}
                    </h1>
                </div>

                {/* Table 1: National Program Table */}
                <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 overflow-x-auto ">
                    <table className="w-full border-collapse border border-gray-300 dark:border-slate-700 text-center table-fixed">
                        <thead>
                            {/* Year Headers */}
                            <tr className="border-b border-gray-300 dark:border-slate-700">
                                <th
                                    rowSpan={2}
                                    className="w-[38%] md:w-[45%] align-middle text-center px-2 py-2 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-xs md:text-base font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-slate-800 leading-tight relative z-10"
                                >
                                    {t('tuition.js_faculty')}
                                </th>
                                <th colSpan={2} className="w-[22%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-slate-800">
                                    {t('tuition.js_year1')}
                                </th>
                                <th colSpan={2} className="w-[22%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-slate-800">
                                    {t('tuition.js_year2')}
                                </th>
                                <th colSpan={2} className="w-[22%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-[#f4f7e6] dark:bg-slate-700/80">
                                    {t('tuition.js_year3')}
                                </th>
                                <th colSpan={2} className="w-[22%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-[#f4f7e6] dark:bg-slate-700/80">
                                    {t('tuition.js_year4')}
                                </th>
                                <th colSpan={2} className="w-[22%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-[#f4f7e6] dark:bg-slate-700/80">
                                    {t('tuition.js_year5')}
                                </th>
                            </tr>

                            {/* Semester Sub-Headers */}
                            <tr className="border-b border-gray-300 dark:border-slate-700 h-7 text-[4px] sm:text-[11px] md:text-[13px]">
                                {/* Year 1 & Year 2 Semesters */}
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-white dark:bg-slate-800 overflow-hidden">
                                    {t('tuition.js_semester1')}
                                </th>
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-white dark:bg-slate-800 overflow-hidden">
                                    {t('tuition.js_semester2')}
                                </th>
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-white dark:bg-slate-800 overflow-hidden">
                                    {t('tuition.js_semester1')}
                                </th>
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-white dark:bg-slate-800 overflow-hidden">
                                    {t('tuition.js_semester2')}
                                </th>
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-[#f4f7e6] dark:bg-slate-700/80 overflow-hidden">
                                    {t('tuition.js_semester1')}
                                </th>
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-[#f4f7e6] dark:bg-slate-700/80 overflow-hidden">
                                    {t('tuition.js_semester2')}
                                </th>
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-[#f4f7e6] dark:bg-slate-700/80 overflow-hidden">
                                    {t('tuition.js_semester1')}
                                </th>
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-[#f4f7e6] dark:bg-slate-700/80 overflow-hidden">
                                    {t('tuition.js_semester2')}
                                </th>
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-[#f4f7e6] dark:bg-slate-700/80 overflow-hidden">
                                    {t('tuition.js_semester1')}
                                </th>
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-[#f4f7e6] dark:bg-slate-700/80 overflow-hidden">
                                    {t('tuition.js_semester2')}
                                </th>
                            </tr>
                        </thead>

                        {/* National Table Body */}
                        <tbody>
                            {natData.map((row) => (
                                <tr key={row.key} className="hover:bg-blue-50 dark:hover:bg-slate-700/50 border-b border-gray-300 dark:border-slate-700">
                                    <td className="px-1 py-2 border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-left align-middle">
                                        <div className="md:px-3 text-[5.5px] sm:text-xs md:text-[14px] font-medium text-[#151B74] dark:text-cyan-300 leading-normal break-words">
                                            {renderFacultyTitle(t(`tuition.${row.key}`))}
                                        </div>
                                    </td>
                                    <td colSpan={4} className="px-0.5 py-2 text-[9px] sm:text-xs md:text-[15px] border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-slate-200 align-middle">
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
                {/* Subsection I-1: National Program */}
                <div className="text-start px-1 sm:px-4 pt-2 sm:pt-4">
                    <h1 className="text-sm sm:text-md md:text-lg font-semibold text-[#151B74] dark:text-cyan-400">
                        II- {t('tuition.js_inter_tuition')}
                    </h1>
                </div>

                {/* Table 1: National Program Table */}
                <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 overflow-x-auto ">
                    <table className="w-full border-collapse border border-gray-300 dark:border-slate-700 text-center table-fixed">
                        <thead>
                            {/* Year Headers */}
                            <tr className="border-b border-gray-300 dark:border-slate-700">
                                <th
                                    rowSpan={2}
                                    className="w-[30%] md:w-[36%] align-middle text-center px-2 py-2 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-xs md:text-base font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-slate-800 leading-tight relative z-10"
                                >
                                    {t('tuition.js_faculty')}
                                </th>
                                <th colSpan={2} className="w-[22%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-slate-800">
                                    {t('tuition.js_year1')}
                                </th>
                                <th colSpan={2} className="w-[22%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-slate-800">
                                    {t('tuition.js_year1')}
                                </th>
                                <th colSpan={2} className="w-[22%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-[#f4f7e6] dark:bg-slate-700/80">
                                    {t('tuition.js_year3')}
                                </th>
                                <th colSpan={2} className="w-[22%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-[#f4f7e6] dark:bg-slate-700/80">
                                    {t('tuition.js_year4')}
                                </th>
                            </tr>

                            {/* Semester Sub-Headers */}
                            <tr className="border-b border-gray-300 dark:border-slate-700 h-7 text-[4px] sm:text-[11px] md:text-[13px]">
                                {/* Year 1 & Year 2 Semesters */}
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-white dark:bg-slate-800 overflow-hidden">
                                    {t('tuition.js_semester1')}
                                </th>
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-white dark:bg-slate-800 overflow-hidden">
                                    {t('tuition.js_semester2')}
                                </th>
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-white dark:bg-slate-800 overflow-hidden">
                                    {t('tuition.js_semester1')}
                                </th>
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-white dark:bg-slate-800 overflow-hidden">
                                    {t('tuition.js_semester2')}
                                </th>
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-[#f4f7e6] dark:bg-slate-700/80 overflow-hidden">
                                    {t('tuition.js_semester1')}
                                </th>
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-[#f4f7e6] dark:bg-slate-700/80 overflow-hidden">
                                    {t('tuition.js_semester2')}
                                </th>
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-[#f4f7e6] dark:bg-slate-700/80 overflow-hidden">
                                    {t('tuition.js_semester1')}
                                </th>
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-[#f4f7e6] dark:bg-slate-700/80 overflow-hidden">
                                    {t('tuition.js_semester2')}
                                </th>

                            </tr>
                        </thead>

                        {/* National Table Body */}
                        <tbody>
                            {interData.map((row) => (
                                <tr key={row.key} className="hover:bg-blue-50 dark:hover:bg-slate-700/50 border-b border-gray-300 dark:border-slate-700">
                                    <td className="px-1 py-2 border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-left align-middle">
                                        <div className="md:px-3 text-[5.5px] sm:text-xs md:text-[14px] font-medium text-[#151B74] dark:text-cyan-300 leading-normal break-words">
                                            {renderFacultyTitle(t(`tuition.${row.key}`))}
                                        </div>
                                    </td>
                                    <td colSpan={4} className="px-0.5 py-2 text-[9px] sm:text-xs md:text-[15px] border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-slate-200 align-middle">
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
                <h2 className="text-sm sm:text-md md:text-lg font-bold text-gray-700 dark:text-slate-300 px-1">
                    ✦ {t('tuition.js_master_doctoral')}
                </h2>

                <div className="text-start px-1 sm:px-4 pt-2 sm:pt-4">
                    <h1 className="text-sm sm:text-md md:text-lg font-semibold text-[#151B74] dark:text-cyan-400">
                        I- {t('tuition.js_inter_tuition')}
                    </h1>
                </div>

                {/* */}
                <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 overflow-x-auto ">
                    <table className="w-full border-collapse border border-gray-300 dark:border-slate-700 text-center table-fixed">
                        <thead>
                            {/* Year Headers */}
                            <tr className="border-b border-gray-300 dark:border-slate-700">
                                <th
                                    rowSpan={2}
                                    className="w-[23%] md:w-[27%] align-middle text-center px-2 py-2 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-xs md:text-base font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-slate-800 leading-tight relative z-10"
                                >
                                    {t('tuition.academic_degree')}
                                </th>
                                <th colSpan={2} className="w-[22%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-slate-800">
                                    {t('tuition.js_year1')}
                                </th>
                                <th colSpan={2} className="w-[22%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-slate-800">
                                    {t('tuition.js_year2')}
                                </th>
                                <th colSpan={2} className="w-[22%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-slate-800">
                                    {t('tuition.js_year3')}
                                </th>
                            </tr>

                            {/* Semester Sub-Headers */}
                            <tr className="border-b border-gray-300 dark:border-slate-700 h-7 text-[4px] sm:text-[11px] md:text-[13px]">
                                {/* Year 1 & Year 2 Semesters */}
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-white dark:bg-slate-800 overflow-hidden">
                                    {t('tuition.js_semester1')}
                                </th>
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-white dark:bg-slate-800 overflow-hidden">
                                    {t('tuition.js_semester2')}
                                </th>
                                 <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-white dark:bg-slate-800 overflow-hidden">
                                    {t('tuition.js_semester1')}
                                </th>
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-white dark:bg-slate-800 overflow-hidden">
                                    {t('tuition.js_semester2')}
                                </th>
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-white dark:bg-slate-800 overflow-hidden">
                                    {t('tuition.js_semester1')}
                                </th>
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-white dark:bg-slate-800 overflow-hidden">
                                    {t('tuition.js_semester2')}
                                </th>
                            </tr>
                        </thead>

                        {/* Master + Doctoral */}
                        <tbody>
                            {masterData.map((row) => (
                                <tr key={row.key} className="hover:bg-blue-50 dark:hover:bg-slate-700/50 border-b border-gray-300 dark:border-slate-700">
                                    <td className="px-1 py-2 border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-left align-middle">
                                        <div className="md:px-3 text-[5.5px] sm:text-xs md:text-[14px] font-medium text-[#151B74] dark:text-cyan-300 leading-normal break-words">
                                            {renderFacultyTitle(t(`tuition.${row.key}`))}
                                        </div>
                                    </td>
                                    <td colSpan={2} className="px-0.5 py-2 text-[9px] sm:text-xs md:text-[15px] border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-slate-200 align-middle">
                                        {row.fee1}
                                    </td>
                                    <td colSpan={2} className="px-0.5 py-2 text-[9px] sm:text-xs md:text-[15px] border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-slate-200 align-middle">
                                        {row.fee2}
                                    </td>
                                    <td colSpan={2} className="px-0.5 py-2 text-[9px] sm:text-xs md:text-[15px] border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-slate-200 align-middle">
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

                <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 overflow-x-auto ">
                    <table className="w-full border-collapse border border-gray-300 dark:border-slate-700 text-center table-fixed">
                        <thead>
                            {/* Year Headers */}
                            <tr className="border-b border-gray-300 dark:border-slate-700">
                                <th
                                    rowSpan={2}
                                    className="w-[16%] md:w-[18%] align-middle text-center px-2 py-2 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-xs md:text-base font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-slate-800 leading-tight relative z-10"
                                >
                                    {t('tuition.academic_degree')}
                                </th>
                                <th colSpan={2} className="w-[22%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-slate-800">
                                    {t('tuition.js_year1')}
                                </th>
                                <th colSpan={2} className="w-[22%] align-middle text-center px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-[10px] sm:text-[14px] md:text-[16px] font-bold text-[#151B74] dark:text-cyan-300 bg-white dark:bg-slate-800">
                                    {t('tuition.js_year2')}
                                </th>
                                
                            </tr>

                            {/* Semester Sub-Headers */}
                            <tr className="border-b border-gray-300 dark:border-slate-700 h-7 text-[4px] sm:text-[11px] md:text-[13px]">
                                {/* Year 1 & Year 2 Semesters */}
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-white dark:bg-slate-800 overflow-hidden">
                                    {t('tuition.js_semester1')}
                                </th>
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-white dark:bg-slate-800 overflow-hidden">
                                    {t('tuition.js_semester2')}
                                </th>
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-white dark:bg-slate-800 overflow-hidden">
                                    {t('tuition.js_semester1')}
                                </th>
                                <th className="px-0.5 py-1 border-r border-gray-300 dark:border-slate-700 text-center bg-white dark:bg-slate-800 overflow-hidden">
                                    {t('tuition.js_semester2')}
                                </th>
                                
                            </tr>
                        </thead>

                        {/* Master + Doctoral */}
                        <tbody>
                            {civilData.map((row) => (
                                <tr key={row.key} className="hover:bg-blue-50 dark:hover:bg-slate-700/50 border-b border-gray-300 dark:border-slate-700">
                                    <td className="px-1 py-2 border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-left align-middle">
                                        <div className="md:px-3 text-[5.5px] sm:text-xs md:text-[14px] font-medium text-[#151B74] dark:text-cyan-300 leading-normal break-words">
                                            {renderFacultyTitle(t(`tuition.${row.key}`))}
                                        </div>
                                    </td>
                                    <td colSpan={2} className="px-0.5 py-2 text-[9px] sm:text-xs md:text-[15px] border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-slate-200 align-middle">
                                        {row.fee1}
                                    </td>
                                    <td colSpan={2} className="px-0.5 py-2 text-[9px] sm:text-xs md:text-[15px] border-r border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-slate-200 align-middle">
                                        {row.fee2}
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}