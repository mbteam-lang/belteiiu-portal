import React from 'react';
import { useTranslation } from 'react-i18next';
import usePageTitle from '@/hooks/usePageTitle';

export default function imaTuition() {
    usePageTitle('កម្មវិធី អភិវឌ្ឍបញ្ញា IMA', 'Intelligent Mental-Arithmetic');
    const { t } = useTranslation();
    return (
        <section className='md:w-11/12 w-full m-auto md:px-5 px-0 mt-10'>
            <div className='md:w-full md:p-3 p-2 bg-[#1F90FF] flex justify-center items-center'>
                <h1 className='text-white text-center font-bold'>{t('tuition.js_tuition_fee')}</h1>
            </div>
            <table className="table-auto border-collapse border">
                <thead className="border">
                    <tr>
                        <th rowSpan="2" className="border-2 border-slate-300 text-center font-medium text-white bg-[#0086B5] md:text-lg text-xs">{t('belteiis.contents.tuitions.levels')}</th>
                        <th colSpan="3" className="border-2 border-slate-300 text-center font-medium text-white bg-[#0086B5] md:text-lg text-xs">{t('tuition.js_tuition_fee')}</th>
                    </tr>
                    <tr>
                        <th className="border-2 border-slate-300 text-center font-medium text-white bg-[#0086B5] md:text-lg text-xs">{t('belteiis.contents.tuitions.2month')}</th>
                        <th className="border-2 border-slate-300 text-center font-medium text-white bg-[#0086B5] md:text-lg text-xs">{t('belteiis.contents.tuitions.4month')}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="even:bg-gray-100 odd:bg-[#FFDFC8]">
                        <td className="text-left border-2 border-slate-300  md:text-lg text-xs">Level 1 (Foundation)</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 80</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 150</td>
                    </tr>
                    <tr className="even:bg-gray-100 odd:bg-[#FFDFC8]">
                        <td className="text-left border-2 border-slate-300  md:text-lg text-xs">Level 2 (Basic)</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 80</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 150</td>
                    </tr>
                    <tr className="even:bg-gray-100 odd:bg-[#FFDFC8]">
                        <td className="text-left border-2 border-slate-300  md:text-lg text-xs">Level 3 (Elementary A)</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 80</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 150</td>
                    </tr>

                    <tr className="even:bg-gray-100 odd:bg-[#FFDFC8]">
                        <td className="text-left border-2 border-slate-300  md:text-lg text-xs">Level 4 (Elementary B)</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 90</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 170</td>
                    </tr>

                    <tr className="even:bg-gray-100 odd:bg-[#FFDFC8]">
                        <td className="text-left border-2 border-slate-300  md:text-lg text-xs">Level 5 (Intermediate A)</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 90</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 170</td>
                    </tr>

                    <tr className="even:bg-gray-100 odd:bg-[#FFDFC8]">
                        <td className="text-left border-2 border-slate-300  md:text-lg text-xs">Level 6 (Intermediate B)</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 90</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 170</td>
                    </tr>

                    <tr className="even:bg-gray-100 odd:bg-[#F1DBDE]">
                        <td className="text-left border-2 border-slate-300  md:text-lg text-xs">Level 7 (Higher A)</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 110</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 200</td>
                    </tr>

                    <tr className="even:bg-gray-100 odd:bg-[#F1DBDE]">
                        <td className="text-left border-2 border-slate-300  md:text-lg text-xs">Level 8 (Higher B)</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 110</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 200</td>
                    </tr>

                    <tr className="even:bg-gray-100 odd:bg-[#F1DBDE]">
                        <td className="text-left border-2 border-slate-300  md:text-lg text-xs">Level 9 (Higher C)</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 110</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 200</td>
                    </tr>

                    <tr className="even:bg-gray-100 odd:bg-[#F1DBDE]">
                        <td className="text-left border-2 border-slate-300  md:text-lg text-xs">Level 10 (Advance A)</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 130</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 250</td>
                    </tr>

                    <tr className="even:bg-gray-100 odd:bg-[#F1DBDE]">
                        <td className="text-left border-2 border-slate-300  md:text-lg text-xs">Level 11 (Advance B)</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 130</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 250</td>
                    </tr>

                    <tr className="even:bg-gray-100 odd:bg-[#F1DBDE]">
                        <td className="text-left border-2 border-slate-300  md:text-lg text-xs">Level 12 (Grade)</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 130</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 250</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="even:bg-red-400 odd:bg-gray-100">
                        <td colSpan="4" className=" md:p-3 p-2 border text-center font-medium text-white bg-[#0086B5] md:w-16 md:text-lg text-xs">{t('belteiis.contents.tuitions.foot_enrollment')}</td>
                    </tr>
                </tfoot>
            </table>
            <div className='md:w-full md:p-3 p-2 bg-[#1F90FF] flex justify-center items-center mt-4'>
                <h1 className='text-white text-center font-bold'>{t('belteiis.contents.sub_program.dayandtime')}</h1>
            </div>
            <table className="table-auto border-collapse border">
                <thead>
                    <tr>
                        <th className="md:w-auto w-28 text-center bg-[#dddddd] border text-black font-normal md:text-lg text-sm">{t('belteiis.contents.sub_program.dayandtime')}</th>
                        <th className="text-center bg-[#dddddd] border text-black font-normal md:text-lg text-sm">{t('belteiis.contents.sub_program.term_6')}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className=" border-2 text-wrap text-center md:text-lg text-xs -tracking-wide" rowSpan="2">
                            {t('belteiis.contents.tuition.js_staturday')}
                            <br />{t('belteiis.contents.sub_program.dt_morning')}
                            <br />{t('belteiis.contents.sub_program.dt_afternoon')}
                        </td>
                        <td className=" border-2 text-wrap text-center md:text-lg text-xs -tracking-wide">
                            {t('belteiis.contents.sub_program.group_i')}
                            <br />{t('belteiis.contents.sub_program.ima_part1')}
                            <br />{t('belteiis.contents.sub_program.ima_part2')}
                            <br />{t('belteiis.contents.sub_program.ima_part3')}
                        </td>
                    </tr>
                    <tr>
                        <td className=" border-2 text-wrap text-center md:text-lg text-xs -tracking-wide">
                            {t('belteiis.contents.sub_program.group_ii')}
                            <br />{t('belteiis.contents.sub_program.ima_part4')}
                            <br />{t('belteiis.contents.sub_program.ima_part5')}
                            <br />{t('belteiis.contents.sub_program.ima_part6')}
                        </td>
                    </tr>
                </tbody>
            </table>
            <h1 className='md:text-lg text-xs font-bold text-blue-800 text-center mt-5'>{t('belteiis.contents.tuitions.txt_foot')}</h1>
            <div className='h-10'></div>
        </section>
    )
}
