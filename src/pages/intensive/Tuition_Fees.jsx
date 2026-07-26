import usePageTitle from '@/hooks/usePageTitle';
import { useTranslation } from 'react-i18next';
import NoData from '@/components/common/Nodata';

export default function tuition_Intensive() {
    const { t } = useTranslation();
    usePageTitle('តម្លៃសិក្សា', 'Tuition Fees')

    return (
        <>
            <div className="container mx-auto px-2 py-10">
                <NoData />
            </div>
            {/* <div className='Dormitory'>
                <div className='h-5'></div>
                <section className='max-w-7xl m-auto md:px-5 px-2'>
                    <div className='space-y-7'>
                        <div className='text-left space-y-7'>
                            <h1 className='md:text-xl text-lg text-gray text-[#151B74]'>{t('tuition.js_nat_tuition')}</h1>
                        </div>
                        <table className="table-auto border-collapse border">
                            <thead>
                                <tr>
                                    <th className="px-5 py-4 text-center bg-[#151B74] border text-white" >{t('tuition.js_na_program')}</th>
                                    <th className="px-5 py-4 text-center bg-[#151B74] border text-white">{t('tuition.js_na_semester')}</th>
                                    <th className="px-5 py-4 text-center bg-[#151B74] border text-white">{t('tuition.js_na_year')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="even:bg-gray-100 odd:bg-white">
                                    <td className="px-5 py-4 border text-wrap" >{t('tuition.js_associate_degrees')}</td>
                                    <td className="px-5 py-4 border text-center">$ 380</td>
                                    <td className="px-5 py-4 text-center">$ 700</td>
                                </tr>
                                <tr className="even:bg-gray-100 odd:bg-white">
                                    <td className="px-5 py-4 border  text-wrap" >{t('tuition.js_bachelor_degrees')}</td>
                                    <td className="px-5 py-4 border text-center">$ 380 	</td>
                                    <td className="px-5 py-4 text-center">$ 700</td>
                                </tr>
                                <tr className="even:bg-gray-100 odd:bg-white">
                                    <td className="px-5 py-4 border  text-wrap" >{t('tuition.js_master_degrees')}</td>
                                    <td className="px-5 py-4 border text-center">$ 800</td>
                                    <td className="px-5 py-4 text-center">$ 1,500</td>
                                </tr>
                                <tr className="even:bg-gray-100 odd:bg-white">
                                    <td className="px-5 py-4 border  text-wrap" >{t('tuition.js_doctoral_degrees')}</td>
                                    <td className="px-5 py-4 border text-center">$ 1,300</td>
                                    <td className="px-5 py-4 text-center">$ 2,500</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='text-left space-y-7'>
                            <h1 className='md:text-xl text-lg text-gray text-[#151B74]'>{t('tuition.js_inter_tuition')}</h1>
                        </div>
                        <table className="table-auto border-collapse border">
                            <thead>
                                <tr>
                                    <th className="px-5 py-4 text-center bg-[#C49B2D] border text-white" >{t('tuition.js_na_program')}</th>
                                    <th className="px-5 py-4 text-center bg-[#C49B2D] border text-white">{t('tuition.js_na_semester')}</th>
                                    <th className="px-5 py-4 text-center bg-[#C49B2D] border text-white">{t('tuition.js_na_year')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="even:bg-gray-100 odd:bg-white">
                                    <td className="px-5 py-4 border text-wrap" >{t('tuition.js_associate_degrees')}</td>
                                    <td className="px-5 py-4 border text-center">$ 550</td>
                                    <td className="px-5 py-4 text-center">$ 1000</td>
                                </tr>
                                <tr className="even:bg-gray-100 odd:bg-white">
                                    <td className="px-5 py-4 border  text-wrap" >{t('tuition.js_bachelor_degrees')}</td>
                                    <td className="px-5 py-4 border text-center">$ 550 	</td>
                                    <td className="px-5 py-4 text-center">$ 1000</td>
                                </tr>
                                <tr className="even:bg-gray-100 odd:bg-white">
                                    <td className="px-5 py-4 border  text-wrap" >{t('tuition.js_master_degrees')}</td>
                                    <td className="px-5 py-4 border text-center">$ 800</td>
                                    <td className="px-5 py-4 text-center">$ 1,500</td>
                                </tr>
                                <tr className="even:bg-gray-100 odd:bg-white">
                                    <td className="px-5 py-4 border  text-wrap" >{t('tuition.js_doctoral_degrees')}</td>
                                    <td className="px-5 py-4 border text-center">$ 1,300</td>
                                    <td className="px-5 py-4 text-center">$ 2,500</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="text-left flex flex-row items-center mx-auto gap-3">
                            <div className='md:flex md:items-center'>
                                <h1 className="text-lg md:text-xl w-full md:w-[60%] text-[#151B74]">
                                    {t('tuition.js_aviation_tuition')}
                                </h1>
                                <h1 className='text-red-500 text-lg block md:inline whitespace-nowrap md:ml-2'>
                                    {t('tuition.js_aviation')}
                                </h1>
                            </div>

                            <div className="w-40">
                                <img src="assets/images/plane.png" alt="aviation_inter_tuition" className="w-full" />
                            </div>
                        </div>

                        <table className="table-auto border-collapse border">
                            <thead>
                                <tr>
                                    <th className="px-5 py-4 text-center bg-[#0a96a4] border text-white" >{t('tuition.js_na_program')}</th>
                                    <th className="px-5 py-4 text-center bg-[#0a96a4] border text-white">{t('tuition.js_na_semester')}</th>
                                    <th className="px-5 py-4 text-center bg-[#0a96a4] border text-white">{t('tuition.js_na_year')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="even:bg-gray-100 odd:bg-white">
                                    <td className="px-5 py-4 border  text-wrap" >{t('tuition.js_associate_degrees')}</td>
                                    <td className="px-5 py-4 border text-center">$ 800</td>
                                    <td className="px-5 py-4 text-center">$ 1,500</td>
                                </tr>
                                <tr className="even:bg-gray-100 odd:bg-white">
                                    <td className="px-5 py-4 border  text-wrap" >{t('tuition.js_bachelor_degrees')}</td>
                                    <td className="px-5 py-4 border text-center">$ 800</td>
                                    <td className="px-5 py-4 text-center">$ 1,500</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="text-left flex flex-row items-center mx-auto gap-3">
                            <div className='md:flex md:items-center'>
                                <h1 className="text-lg md:text-xl w-full md:w-[60%] text-[#151B74]">
                                    {t('tuition.js_aviation_inter_tuition')}
                                </h1>
                                <h1 className='text-red-500 text-lg block md:inline whitespace-nowrap md:ml-2'>
                                    {t('tuition.js_aviation')}
                                </h1>
                            </div>
                            <div className="w-40">
                                <img src="assets/images/plane.png" alt="aviation_inter_tuition" className="w-full" />
                            </div>
                        </div>

                        <table className="table-auto border-collapse border">
                            <thead>
                                <tr>
                                    <th className="px-5 py-4 text-center bg-[#0a96a4] border text-white" >{t('tuition.js_na_program')}</th>
                                    <th className="px-5 py-4 text-center bg-[#0a96a4] border text-white">{t('tuition.js_na_semester')}</th>
                                    <th className="px-5 py-4 text-center bg-[#0a96a4] border text-white">{t('tuition.js_na_year')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="even:bg-gray-100 odd:bg-white">
                                    <td className="px-5 py-4 border text-wrap" >{t('tuition.js_associate_degrees')}</td>
                                    <td className="px-5 py-4 border text-center">$ 1,100</td>
                                    <td className="px-5 py-4 text-center">$ 2,000</td>
                                </tr>
                                <tr className="even:bg-gray-100 odd:bg-white">
                                    <td className="px-5 py-4 border text-wrap" >{t('tuition.js_bachelor_degrees')}</td>
                                    <td className="px-5 py-4 border text-center">$ 1,100</td>
                                    <td className="px-5 py-4 text-center">$ 2,000</td>
                                </tr>
                                <tr className="even:bg-gray-100 odd:bg-white">
                                    <td className="px-5 py-4 border  text-wrap" >{t('tuition.js_master_degrees')}</td>
                                    <td className="px-5 py-4 border text-center">$ 1,300</td>
                                    <td className="px-5 py-4 text-center">$ 2,500</td>
                                </tr>
                                <tr className="even:bg-gray-100 odd:bg-white">
                                    <td className="px-5 py-4 border  text-wrap" >{t('tuition.js_doctoral_degrees')}</td>
                                    <td className="px-5 py-4 border text-center">$ 1,800</td>
                                    <td className="px-5 py-4 text-center">$ 3,500</td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr className='even:bg-gray-100 odd:bg-white'>
                                    <td className="px-5 py-4 text-center border" colSpan="4">{t('tuition.js_first_int')}</td>
                                </tr>
                                <tr className='even:bg-gray-100 odd:bg-white'>
                                    <td className="px-5 py-4 text-center border" colSpan="4">{t('tuition.js_second_int')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <div className='h-10'></div>
            </div> */}
        </>
    )
}
