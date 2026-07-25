import React from 'react';
import { useTranslation } from 'react-i18next';
import usePageTitle from '@/hooks/usePageTitle';

export default function itpcTuition() {
    usePageTitle('ថ្នាក់ត្រៀមប្រឡងតេស្តអន្តរជាតិ', 'Internation Preparation Courses');
    const { t } = useTranslation();
    return (
        <section className='md:w-11/12 w-full m-auto md:px-5 px-0'>
            <div className='md:w-full md:p-3 p-2 bg-[#1F90FF] flex justify-center items-center'>
                <h1 className='text-white text-center font-bold'>{t('tuition.js_tuition_fee')}</h1>
            </div>
            <table className="table-auto border-collapse border">
                <thead className="border">
                    <tr>
                        <th className="border-2 border-slate-300 text-center font-medium text-white bg-[#0086B5] md:text-lg text-xs">{t('belteiis.contents.program')}</th>
                        <th className="border-2 border-slate-300 text-center font-medium text-white bg-[#0086B5] md:text-lg text-xs">{t('tuition.js_tuition_fee')}</th>
                        <th className="border-2 border-slate-300 text-center font-medium text-white bg-[#0086B5] md:text-lg text-xs">{t('belteiis.contents.tuitions.duration')}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="">
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">{t('belteiis.header.main_program.test')}</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">$ 120</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-xs">40 {t('belteiis.contents.tuitions.hours')}</td>
                    </tr>
                </tbody>
            </table>
            <div className='md:w-full md:p-3 p-2 bg-[#1F90FF] flex justify-center items-center mt-4'>
                <h1 className='text-white text-center font-bold'>{t('belteiis.contents.sub_program.dayandtime')}</h1>
            </div> 
            <table className="table-auto border-collapse border w-full">
                <thead className="border">
                    <tr>
                        <th colSpan="2" className="border-2 border-slate-300 text-center font-medium text-white bg-[#0086B5] md:text-lg text-xs">{t('belteiis.contents.sub_program.dayandtime')}</th>
                        <th rowSpan="2" className="border-2 border-slate-300 text-center font-medium text-white bg-[#0086B5] md:text-lg text-xs">{t('belteiis.contents.sub_program.term_title')}</th>
                    </tr>
                    <tr>
                        <th className="border-2 border-slate-300 text-center font-medium text-white bg-[#0086B5] md:text-lg text-xs">{t('belteiis.contents.sub_program.dt_mon_fri')}</th>
                        <th className="border-2 border-slate-300 text-center font-medium text-white bg-[#0086B5] md:text-lg text-xs">{t('tuition.js_sat_sun')}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-[9px]"> 
                            8:00 AM - 10:30 AM 
                            <br />2:00 PM - 4:30 PM 
                            <br />5:30 PM - 7:30 PM 
                        </td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-[9px]">
                            {t('belteiis.contents.sub_program.itpc_saturday')} / 2:00 PM - 5:00 PM 
                            <br />
                            {t('belteiis.contents.sub_program.itpc_sunday')}</td>
                        <td className="text-center border-2 border-slate-300  md:text-lg text-[9px]">
                            {t('belteiis.contents.sub_program.term_itpc_feb_may')} 
                            <br />{t('belteiis.contents.sub_program.term_itpc_may_aug')} 
                            <br />{t('belteiis.contents.sub_program.term_itpc_aug_nov')} 
                            <br />{t('belteiis.contents.sub_program.term_itpc_nov_feb')}</td>
                    </tr>
                </tbody>
            </table>
            <div className='h-10'></div>
        </section>
    )
}
