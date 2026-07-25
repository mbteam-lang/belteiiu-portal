import React from 'react';
import { useTranslation } from 'react-i18next';
import usePageTitle from '@/hooks/usePageTitle';

export default function GedTuition() {
    usePageTitle('ចំណេះទូទៅ', 'General Education');
    const { t } = useTranslation();
    return (
        <section className='md:w-11/12 w-full m-auto md:px-5 px-0 mt-10'>
            <div className='md:w-full md:p-3 p-2 bg-[#1F90FF] flex justify-center items-center'>
                <h1 className='text-white text-center font-bold'>{t('tuition.js_tuition_fee')}</h1>
            </div>
            {/* Advanced */}
            <h1 className='text-[#086BB6] md:text-lg text-sm'>{t('belteiis.contents.tuitions.advanced')}</h1>
            <table className="table-auto border-collapse border">
                <thead className="border">
                    <tr>
                        <th rowSpan="2" className="border text-center font-medium text-white bg-[#028F89] md:w-16 md:text-lg text-sm">{t('belteiis.contents.tuitions.grade')}</th>
                        <th colSpan="3" className="border text-center font-medium text-white bg-[#028F89] md:text-lg text-sm">{t('tuition.js_tuition_fee')}</th>
                    </tr>
                    <tr>
                        <th className="border text-center font-medium text-white bg-[#028F89] md:text-lg text-sm">{t('belteiis.contents.tuitions.semester1')}</th>
                        <th className="border text-center font-medium text-white bg-[#028F89] md:text-lg text-sm">{t('belteiis.contents.tuitions.semester2')}</th>
                        <th className="border text-center font-medium text-white bg-[#028F89] md:text-lg text-sm">{t('belteiis.contents.tuitions.year')}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="even:bg-[#CBD5EE] odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">{t('belteiis.contents.tuitions.sub_advanced')}</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 270</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 270</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 500</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="even:bg-[#CBD5EE] odd:bg-gray-100">
                        <td colSpan="4" className=" md:p-3 p-2 border text-center font-medium text-white bg-[#028F89] md:w-16 md:text-lg text-sm">{t('belteiis.contents.tuitions.foot_enrollment')}</td>
                    </tr>
                </tfoot>
            </table>
            {/* Elementary */}
            <h1 className='text-[#086BB6] md:text-lg text-sm'>{t('belteiis.contents.tuitions.elementary')}</h1>
            <table className="table-auto border-collapse border">
                <thead className="border">
                    <tr>
                        <th rowSpan="2" className="border text-center font-medium text-white bg-[#F7941D] md:w-16 md:text-lg text-sm">{t('belteiis.contents.tuitions.grade')}</th>
                        <th colSpan="3" className="border text-center font-medium text-white bg-[#F7941D] md:text-lg text-sm">{t('tuition.js_tuition_fee')}</th>
                    </tr>
                    <tr>
                        <th className="border text-center font-medium text-white bg-[#F7941D] md:text-lg text-sm">{t('belteiis.contents.tuitions.semester1')}</th>
                        <th className="border text-center font-medium text-white bg-[#F7941D] md:text-lg text-sm">{t('belteiis.contents.tuitions.semester2')}</th>
                        <th className="border text-center font-medium text-white bg-[#F7941D] md:text-lg text-sm">{t('belteiis.contents.tuitions.year')}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="even:bg-[#FABE77] odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">1</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 320</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 320</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 600</td>
                    </tr>
                    <tr className="even:bg-[#FABE77] odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">2</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 320</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 320</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 600</td>
                    </tr>
                    <tr className="even:bg-[#FABE77] odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">3</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 345</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 345</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 650</td>
                    </tr>

                    <tr className="even:bg-[#FABE77] odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">4</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 345</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 345</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 650</td>
                    </tr>
                    <tr className="even:bg-[#FABE77] odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">5</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 370</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 370</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 700</td>
                    </tr>
                    <tr className="even:bg-[#FABE77] odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">6</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 370</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 370</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 700</td>
                    </tr>

                </tbody>
                <tfoot>
                    <tr className="even:bg-[#CBD5EE] odd:bg-gray-100">
                        <td colSpan="4" className=" md:p-3 p-2 border text-center font-medium text-white bg-[#F7941D] md:w-16 md:text-lg text-sm">{t('belteiis.contents.tuitions.foot_enrollment')}</td>
                    </tr>
                </tfoot>
            </table>
            {/* Junior */}
            <h1 className='text-[#086BB6] md:text-lg text-sm'>{t('belteiis.contents.tuitions.junior')}</h1>
            <table className="table-auto border-collapse border">
                <thead className="border-2">
                    <tr>
                        <th rowSpan="2" className="border-2 text-center font-medium text-white bg-[#29ABE2] md:w-16 md:text-lg text-sm">{t('belteiis.contents.tuitions.grade')}</th>
                        <th colSpan="3" className="border-2 text-center font-medium text-white bg-[#29ABE2] md:text-lg text-sm">{t('tuition.js_tuition_fee')}</th>
                    </tr>
                    <tr>
                        <th className="border-2 text-center font-medium text-white bg-[#29ABE2] md:text-lg text-sm">{t('belteiis.contents.tuitions.semester1')}</th>
                        <th className="border-2 text-center font-medium text-white bg-[#29ABE2] md:text-lg text-sm">{t('belteiis.contents.tuitions.semester2')}</th>
                        <th className="border-2 text-center font-medium text-white bg-[#29ABE2] md:text-lg text-sm">{t('belteiis.contents.tuitions.year')}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="even:bg-[#a9ddf3] odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">7</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 420</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 420</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 800</td>
                    </tr>
                    <tr className="even:bg-[#a9ddf3] odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">8</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 420</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 420</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 800</td>
                    </tr>
                    <tr className="even:bg-[#a9ddf3] odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">9</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 445</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 445</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 850</td>
                    </tr>

                    <tr className="even:bg-[#a9ddf3] odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">10</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 445</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 445</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 850</td>
                    </tr>
                    <tr className="even:bg-[#a9ddf3] odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">11</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 445</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 445</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 850</td>
                    </tr>
                    <tr className="even:bg-[#a9ddf3] odd:bg-gray-100">
                        <td className="text-center border-2 md:text-lg text-xs">12</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 445</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 445</td>
                        <td className="text-center border-2 md:text-lg text-xs">$ 850</td>
                    </tr>

                </tbody>
                <tfoot>
                    <tr className="even:bg-gray-100 odd:bg-[#29ABE2]">
                        <td colSpan="4" className=" md:p-3 p-2 border text-center font-medium text-white bg-[#29ABE2] md:w-16 md:text-lg text-sm">{t('belteiis.contents.tuitions.foot_enrollment')}</td>
                    </tr>
                </tfoot>
            </table>
            <hr className='border-t-2 border-gray-600' />

            <div className='md:w-full md:p-3 p-2 bg-[#1F90FF] flex justify-center items-center'>
                <h1 className='text-white text-center font-bold'>{t('belteiis.contents.sub_program.dayandtime')}</h1>
            </div> 
            <table className="table-auto border-collapse border">
                <thead>
                    <tr>
                        <th className="md:w-auto w-28 text-center bg-[#dddddd] border text-black font-semibold md:text-lg text-sm">{t('belteiis.contents.tuitions.grade')}</th>
                        <th className="md:w-auto w-28 text-center bg-[#dddddd] border text-black font-semibold md:text-lg text-sm">{t('belteiis.contents.tuitions.day')}</th>
                        <th className=" text-center bg-[#dddddd] border text-black font-semibold md:text-lg text-sm">{t('belteiis.contents.tuitions.time')}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className=" border-2 text-wrap text-center md:text-lg text-[9px] -tracking-wide">{t('belteiis.contents.tuitions.sub_elementary')}</td>
                        <td className=" border-2 text-wrap text-center md:text-lg text-[9px] -tracking-wide">{t('belteiis.contents.sub_program.dt_mon_sat')}</td>
                        <td className=" border-2 text-wrap text-center md:text-lg text-[9px] -tracking-wide">{t('belteiis.contents.sub_program.dt_morning')} <br />{t('belteiis.contents.sub_program.dt_afternoon')}</td>
                    </tr>
                    <tr>
                        <td className=" border-2 text-wrap text-center md:text-lg text-[9px] -tracking-wide">{t('belteiis.contents.tuitions.sub_junior')}</td>
                        <td className=" border-2 text-wrap text-center md:text-lg text-[9px] -tracking-wide">{t('belteiis.contents.sub_program.dt_mon_sat')}</td>
                        <td className=" border-2 text-wrap text-center md:text-lg text-[9px] -tracking-wide">{t('belteiis.contents.sub_program.dt_6_12_morning')}<br />{t('belteiis.contents.sub_program.dt_6_12_afternoon')}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4" className=" md:p-3 p-2 border text-center font-medium text-black bg-[#dddddd] md:w-16 md:text-lg text-sm">{t('belteiis.contents.tuitions.new_academic')}</td>
                    </tr>
                </tfoot>
            </table>
            <h1 className='md:text-lg text-xs font-bold text-blue-800 text-center'>{t('belteiis.contents.tuitions.txt_foot')}</h1>
            <div className='h-10'></div>
        </section>
    )
}
