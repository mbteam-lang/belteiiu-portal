import React from 'react';
import { useTranslation } from 'react-i18next';
import usePageTitle from '@/hooks/usePageTitle';

export default function CslTuition() {
    usePageTitle('ភាសាចិនទូទៅ', 'CSL Program');
    const { t } = useTranslation();
    return (
        <section className='md:w-11/12 w-full m-auto md:px-5 px-0 mt-10'>
            <div className='md:w-full md:p-3 p-2 bg-[#1F90FF] flex justify-center items-center'>
                <h1 className='text-white text-center font-bold'>{t('tuition.js_tuition_fee')} <br /> 学费</h1>
            </div>
            {/* Preschool */}
            <h1 className='text-[#086BB6] md:text-lg text-xs p-3'>{t('belteiis.contents.sub_program.sub_csl_1')} <br /> 学前课程</h1>
            <table className="table-auto border-collapse border">
                <thead className="border">
                    <tr>
                        <th rowSpan="2" className="border-2 border-slate-300 text-center font-medium text-white bg-red-400 md:text-lg text-xs">{t('belteiis.contents.tuitions.levels')} <br /> 标准等级</th>
                        <th colSpan="3" className="border-2 border-slate-300 text-center font-medium text-white bg-red-400 md:text-lg text-xs">{t('tuition.js_tuition_fee')} <br /> 学费</th>
                    </tr>
                    <tr>
                        <th className="border-2 border-slate-300 text-center font-medium text-white bg-red-400 md:text-lg text-xs">{t('belteiis.contents.tuitions.3month')} <br /> 三个月</th>
                        <th className="border-2 border-slate-300 text-center font-medium text-white bg-red-400 md:text-lg text-xs">{t('belteiis.contents.tuitions.6month')} <br /> 六个月</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="even:bg-red-200 odd:bg-gray-100">
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">Preschool 1</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 160</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 300</td>
                    </tr>
                    <tr className="even:bg-red-200 odd:bg-gray-100">
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">Preschool 2</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 160</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 300</td>
                    </tr>
                    <tr className="even:bg-red-200 odd:bg-gray-100">
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">Preschool 3</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 160</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 300</td>
                    </tr>

                    <tr className="even:bg-red-200 odd:bg-gray-100">
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">Preschool 4</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 160</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 300</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="even:bg-red-400 odd:bg-gray-100">
                        <td colSpan="4" className=" md:p-3 p-2 border text-center font-medium text-white bg-red-400 md:w-16 md:text-lg text-xs">
                            {t('belteiis.contents.tuitions.foot_enrollment')}
                            <br />
                            每天都可以報名！
                        </td>
                    </tr>
                </tfoot>
            </table>

            {/* Young */}
            <h1 className='text-[#086BB6] md:text-lg text-xs p-3'>{t('belteiis.contents.sub_program.sub_csl_2')}  <br /> 少年课程</h1>
            <table className="table-auto border-collapse border">
                <thead className="border">
                    <tr>
                        <th rowSpan="2" className="border-2 border-slate-300 text-center font-medium text-white bg-[#0ca0d1] md:text-lg text-xs">{t('belteiis.contents.tuitions.levels')} <br /> 标准等级</th>
                        <th colSpan="3" className="border-2 border-slate-300 text-center font-medium text-white bg-[#0ca0d1] md:text-lg text-xs">{t('tuition.js_tuition_fee')} <br /> 学费</th>

                    </tr>
                    <tr>
                        <th className="border-2 border-slate-300 text-center font-medium text-white bg-[#0ca0d1] md:text-lg text-xs">{t('belteiis.contents.tuitions.3month')} <br /> 三个月</th>
                        <th className="border-2 border-slate-300 text-center font-medium text-white bg-[#0ca0d1] md:text-lg text-xs">{t('belteiis.contents.tuitions.6month')} <br /> 六个月</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="even:bg-[#AADBEC] odd:bg-gray-100">
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">Level 1</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 160</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 300</td>
                    </tr>
                    <tr className="even:bg-[#AADBEC] odd:bg-gray-100">
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">Level 2</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 160</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 300</td>
                    </tr>
                    <tr className="even:bg-[#AADBEC] odd:bg-gray-100">
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">Level 3</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 160</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 300</td>
                    </tr>

                    <tr className="even:bg-[#AADBEC] odd:bg-gray-100">
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">Level 4</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 170</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 320</td>
                    </tr>
                    <tr className="even:bg-[#AADBEC] odd:bg-gray-100">
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">Level 5</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 170</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 320</td>
                    </tr>
                    <tr className="even:bg-[#AADBEC] odd:bg-gray-100">
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">Level 6</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 170</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 320</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="even:bg-[#0ca0d1] odd:bg-gray-100">
                        <td colSpan="4" className=" md:p-3 p-2 border text-center font-medium text-white bg-[#0ca0d1] md:w-16 md:text-lg text-xs">
                            {t('belteiis.contents.tuitions.foot_enrollment')}
                        <br />
                            每天都可以報名！    
                        </td>
                    </tr>
                </tfoot>
            </table>

            {/* Adult */}
            <h1 className='text-[#086BB6] md:text-lg text-xs p-3'>{t('belteiis.contents.sub_program.sub_csl_3')} <br /> 青年或成人课程</h1>
            <table className="table-auto border-collapse border">
                <thead className="border">
                    <tr>
                        <th rowSpan="2" className="border-2 border-slate-300 text-center font-medium text-white bg-[#3C94DB] md:text-lg text-xs">{t('belteiis.contents.tuitions.levels')} <br /> 标准等级</th>
                        <th colSpan="3" className="border-2 border-slate-300 text-center font-medium text-white bg-[#3C94DB] md:text-lg text-xs">{t('tuition.js_tuition_fee')} <br /> 学费</th>

                    </tr>
                    <tr>
                        <th className="border-2 border-slate-300 text-center font-medium text-white bg-[#3C94DB] md:text-lg text-xs">{t('belteiis.contents.tuitions.3month')} <br /> 三个月</th>
                        <th className="border-2 border-slate-300 text-center font-medium text-white bg-[#3C94DB] md:text-lg text-xs">{t('belteiis.contents.tuitions.6month')} <br /> 六个月</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="even:bg-[#ECF3F9] odd:bg-gray-100">
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">Level 7</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 175</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 330</td>
                    </tr>
                    <tr className="even:bg-[#ECF3F9] odd:bg-gray-100">
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">Level 8</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 175</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 330</td>
                    </tr>
                    <tr className="even:bg-[#ECF3F9] odd:bg-gray-100">
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">Level 9</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 175</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 330</td>
                    </tr>

                    <tr className="even:bg-[#ECF3F9] odd:bg-gray-100">
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">Level 10</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 180</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 340</td>
                    </tr>
                    <tr className="even:bg-[#ECF3F9] odd:bg-gray-100">
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">Level 11</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 180</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 340</td>
                    </tr>
                    <tr className="even:bg-[#ECF3F9] odd:bg-gray-100">
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">Level 12</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 180</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 340</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="even:bg-[#0ca0d1] odd:bg-gray-100">
                        <td colSpan="4" className=" md:p-3 p-2 border text-center font-medium text-white bg-[#3C94DB] md:w-16 md:text-lg text-xs">
                            {t('belteiis.contents.tuitions.foot_enrollment')}
                        <br />
                            每天都可以報名！    
                        </td>
                    </tr>
                </tfoot>
            </table>
            <div className='md:w-full md:p-3 p-2 bg-[#1F90FF] mt-5'>
                <h1 className='text-white text-center font-bold'>{t('belteiis.contents.sub_program.dayandtime')} 
                    <br /> 授课时间
                </h1>
            </div> 
            <table className="table-auto border-collapse border">
                <thead>
                    <tr>
                        <th className="md:w-auto w-28 text-center bg-[#dddddd] border text-black font-normal md:text-lg text-sm">
                            {t('belteiis.contents.sub_program.dayandtime')} <br />授课时间</th>
                        <th className="text-center bg-[#dddddd] border text-black font-normal md:text-lg text-sm">
                            {t('belteiis.contents.sub_program.term_title')} <br /> 每年学期 (四个学期)</th>
                        <th className="md:w-auto w-28 text-center bg-[#dddddd] border text-black font-normal md:text-lg text-sm">
                            {t('belteiis.contents.tuitions.duration')} <br />期間</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className=" border-2 text-wrap text-center md:text-lg text-xs -tracking-wide">
                            {t('belteiis.contents.sub_program.dt_mon_fri')}<br />周一至周五 
                            <br /> 05:30 PM - 07:00 PM
                        </td>
                        <td className=" border-2 text-wrap text-center md:text-lg text-xs -tracking-wide">
                            {t('belteiis.contents.sub_program.term_csl_jan_july')}
                            <br/> 
                            {t('belteiis.contents.sub_program.term_csl_july_jun')}
                            <br /> 
                            {t('belteiis.contents.sub_program.term_csl_apr_oct')}
                            <br /> 
                            {t('belteiis.contents.sub_program.term_csl_oct_apr')}
                        </td>
                        <td className=" border-2 text-wrap text-center md:text-lg text-xs -tracking-wide">
                            1 Level  = 1 Term 
                            <br/>
                            = 6 Months
                            <br/>
                            = 195 Hours
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className='h-10'></div>
        </section>
    )
}
