import React from 'react';
import { useTranslation } from 'react-i18next';
import usePageTitle from '@/hooks/usePageTitle';

export default function EslTuition() {
    usePageTitle('ភាសាអង់គ្លេសទូទៅ', 'ESL Program');
    const { t } = useTranslation();
    return (
        <section className='md:w-11/12 w-full m-auto md:px-5 px-0 mt-10'>
            <div className='md:w-full md:p-3 p-2 bg-[#1F90FF] flex justify-center items-center'>
                <h1 className='text-white text-center font-bold'>{t('tuition.js_tuition_fee')}</h1>
            </div>
            {/* Preschool */}
            <h1 className='text-[#086BB6] md:text-lg text-xs p-3'>{t('belteiis.contents.sub_program.sub_esl_1')}</h1>
            <table className="table-auto border-collapse border">
                <thead className="border">
                    <tr>
                        <th rowSpan={2} className="border text-center font-medium text-white bg-pink-300  md:text-lg text-xs">{t('belteiis.contents.tuitions.levels')}</th>
                        <th colSpan={3} className="border text-center font-medium text-white bg-pink-300 md:text-lg text-xs">{t('tuition.js_tuition_fee')}</th>
                    </tr>
                    <tr>
                        <th className="border text-center font-medium text-white bg-pink-300 md:text-lg text-xs">{t('belteiis.contents.tuitions.3month')}</th>
                        <th className="border text-center font-medium text-white bg-pink-300 md:text-lg text-xs">{t('belteiis.contents.tuitions.6month')}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="even:bg-pink-200 odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">Preschool 1</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 160</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 300</td>
                    </tr>
                    <tr className="even:bg-pink-200 odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">Preschool 2</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 160</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 300</td>
                    </tr>
                    <tr className="even:bg-pink-200 odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">Preschool 3</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 160</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 300</td>
                    </tr>

                    <tr className="even:bg-pink-200 odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">Preschool 4</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 160</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 300</td>
                    </tr>
                    <tr className="even:bg-pink-200 odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">Preschool 5</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 160</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 300</td>
                    </tr>
                    <tr className="even:bg-pink-200 odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">Preschool 6</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 160</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 300</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="even:bg-pink-200 odd:bg-gray-100">
                        <td colSpan="4" className=" md:p-3 p-2 border text-center font-medium text-white bg-pink-300 md:w-16 md:text-lg text-xs">{t('belteiis.contents.tuitions.foot_enrollment')}</td>
                    </tr>
                </tfoot>
            </table>
            
            {/* Young */}
            <h1 className='text-[#086BB6] md:text-lg text-xs p-3'>{t('belteiis.contents.sub_program.sub_esl_2')}</h1>
            <table className="table-auto border-collapse border">
                <thead className="border">
                    <tr>
                        <th rowSpan={2} className="border text-center font-medium text-white bg-red-500  md:text-lg text-xs">{t('belteiis.contents.tuitions.levels')}</th>
                        <th colSpan={2} className="border text-center font-medium text-white bg-red-500 md:text-lg text-xs">{t('belteiis.contents.sub_program.els_full_time')}</th>
                        <th colSpan={2} className="border text-center font-medium text-white bg-red-500 md:text-lg text-xs">{t('belteiis.contents.sub_program.els_part_time')}</th>

                    </tr>
                    <tr>
                        <th className="border text-center font-medium text-white bg-red-500 md:text-lg text-xs">{t('belteiis.contents.tuitions.3month')}</th>
                        <th className="border text-center font-medium text-white bg-red-500 md:text-lg text-xs">{t('belteiis.contents.tuitions.6month')}</th>
                        <th className="border text-center font-medium text-white bg-red-500 md:text-lg text-xs">{t('belteiis.contents.tuitions.3month')}</th>
                        <th className="border text-center font-medium text-white bg-red-500 md:text-lg text-xs">{t('belteiis.contents.tuitions.6month')}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="even:bg-red-300 odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">1</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 175</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 330</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 160</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 300</td>
                    </tr>
                    <tr className="even:bg-red-300 odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">2</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 175</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 330</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 160</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 300</td>
                    </tr>
                    <tr className="even:bg-red-300 odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">3</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 175</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 330</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 160</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 300</td>
                    </tr>

                    <tr className="even:bg-red-300 odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">4</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 185</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 350</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 170</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 320</td>
                    </tr>
                    <tr className="even:bg-red-300 odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">5</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 185</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 350</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 170</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 320</td>
                    </tr>
                    <tr className="even:bg-red-300 odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">6</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 185</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 350</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 170</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 320</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="even:bg-red-300 odd:bg-gray-100">
                        <td colSpan="5" className="md:p-3 p-2 border text-center font-medium text-white bg-red-500 md:w-16 md:text-lg text-xs">{t('belteiis.contents.tuitions.foot_enrollment')}</td>
                    </tr>
                </tfoot>
            </table>
            {/* Adult */}
            <h1 className='text-[#086BB6] md:text-lg text-xs p-3'>{t('belteiis.contents.sub_program.sub_esl_3')}</h1>
            <table className="table-auto border-collapse border">
                <thead className="border">
                    <tr>
                        <th rowSpan={2} className="border text-center font-medium text-white bg-[#0B3F70]  md:text-lg text-xs">{t('belteiis.contents.tuitions.levels')}</th>
                        <th colSpan={2} className="border text-center font-medium text-white bg-[#0B3F70] md:text-lg text-xs">{t('belteiis.contents.sub_program.els_full_time')}</th>
                        <th colSpan={2} className="border text-center font-medium text-white bg-[#0B3F70] md:text-lg text-xs">{t('belteiis.contents.sub_program.els_part_time')}</th>

                    </tr>
                    <tr>
                        <th className="border text-center font-medium text-white bg-[#0B3F70] md:text-lg text-xs">{t('belteiis.contents.tuitions.3month')}</th>
                        <th className="border text-center font-medium text-white bg-[#0B3F70] md:text-lg text-xs">{t('belteiis.contents.tuitions.6month')}</th>
                        <th className="border text-center font-medium text-white bg-[#0B3F70] md:text-lg text-xs">{t('belteiis.contents.tuitions.3month')}</th>
                        <th className="border text-center font-medium text-white bg-[#0B3F70] md:text-lg text-xs">{t('belteiis.contents.tuitions.6month')}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="even:bg-[#C2C4D3] odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">7</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 195</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 370</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 175</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 330</td>
                    </tr>
                    <tr className="even:bg-[#C2C4D3] odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">8</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 195</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 370</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 175</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 330</td>
                    </tr>
                    <tr className="even:bg-[#C2C4D3] odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">9</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 195</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 370</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 175</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 330</td>
                    </tr>

                    <tr className="even:bg-[#C2C4D3] odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">10</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 210</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 400</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 180</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 340</td>
                    </tr>
                    <tr className="even:bg-[#C2C4D3] odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">11</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 210</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 400</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 180</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 340</td>
                    </tr>
                    <tr className="even:bg-[#C2C4D3] odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">12</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 210</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 400</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 180</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 340</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="even:bg-[#C2C4D3] odd:bg-gray-100">
                        <td colSpan={5} className=" md:p-3 p-2 border text-center font-medium text-white bg-[#0B3F70] md:w-16 md:text-lg text-xs">{t('belteiis.contents.tuitions.foot_enrollment')}</td>
                    </tr>
                </tfoot>
            </table>

            <div className='md:w-full md:p-3 p-2 bg-[#1F90FF] flex justify-center items-center mt-5'>
                <h1 className='text-white text-center font-bold'>{t('belteiis.contents.sub_program.dayandtime')}</h1>
            </div>
            <table className="table-auto border-collapse border">
                <thead>
                    <tr>
                        <th className="md:w-auto w-28 text-center bg-[#dddddd] border text-black font-semibold md:text-lg text-sm">{t('belteiis.contents.tuitions.grade')}</th>
                        <th className="md:w-auto w-28 text-center bg-[#dddddd] border text-black font-semibold md:text-lg text-sm">{t('belteiis.contents.sub_program.dayandtime')}</th>
                        <th className="text-center bg-[#dddddd] border text-black font-semibold md:text-lg text-sm">{t('belteiis.contents.sub_program.term_title')}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className=" border-2 text-wrap text-center md:text-lg text-xs -tracking-wide">{t('belteiis.contents.sub_program.els_full_time')}</td>
                        <td className=" border-2 text-wrap text-center md:text-lg text-xs -tracking-wide">
                            {t('belteiis.contents.sub_program.dt_mon_fri')}
                            <br /> {t('belteiis.contents.sub_program.esl_morning')}:
                            <br /> {t('belteiis.contents.sub_program.esl_afternoon')}:
                        </td>
                        <td className=" border-2 text-wrap text-center md:text-lg text-xs -tracking-wide" rowSpan={2}>
                            {t('belteiis.contents.sub_program.term_esl_mar_sep')}<br />
                            {t('belteiis.contents.sub_program.term_esl_june_dec')}<br />
                            {t('belteiis.contents.sub_program.term_esl_sep_mar')}<br />
                            {t('belteiis.contents.sub_program.term_esl_dec_june')}
                        </td>
                    </tr>
                    <tr>
                        <td className=" border-2 text-wrap text-center md:text-lg text-xs -tracking-wide">{t('belteiis.contents.sub_program.els_part_time')}</td>
                        <td className=" border-2 text-wrap text-center md:text-lg text-xs -tracking-wide">
                            {t('belteiis.contents.sub_program.dt_mon_fri')}
                            <br />{t('belteiis.contents.sub_program.esl_evening')}
                        </td>
                    </tr>
                </tbody>
            </table>
            <h1 className='md:text-lg text-xs font-bold text-blue-800 text-center mt-5'>{t('belteiis.contents.tuitions.txt_foot')}</h1>
            <div className='h-10'></div>
        </section>
    )
}
