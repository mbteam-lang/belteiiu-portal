import React from 'react';
import { useTranslation } from 'react-i18next';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import usePageTitle from '@/hooks/usePageTitle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Cover from '@/assets/images/main_program/test_center/1.jpg';
import Cover1 from '@/assets/images/main_program/test_center/cover1.jpg';
import Cover2 from '@/assets/images/main_program/test_center/cover2.jpg';
import Cetificat from '@/assets/images/main_program/test_center/certificate.png';
export default function Test_Center() {
    usePageTitle('ថ្នាក់ត្រៀមប្រឡងតេស្តអន្តរជាតិ', 'Internation Preparation Courses');
    const { t } = useTranslation();

    const data = [
        {
            title: t('belteiis.header.main_program.test'),
            term_title: t('belteiis.contents.sub_program.term_title'),            
            dayandtime: t('belteiis.contents.sub_program.dayandtime'),
            certificate: t('belteiis.contents.sub_program.certificate'),
            description: t('belteiis.contents.sub_program.itpc_description'),
            title_mon_fri: t('belteiis.contents.sub_program.dt_mon_fri'), 
            title_sat_sun: t('tuition.js_sat_sun'),
            albums: [
                { image: Cetificat },
                { image: Cover1 },
                { image: Cover },
                { image: Cover2 },
            ],
            terms: [
                { title: t('belteiis.contents.sub_program.term_itpc_feb_may'), color: "bg-[#FF3B30] bg-opacity-10" },
                { title: t('belteiis.contents.sub_program.term_itpc_may_aug'), color: "bg-[#08BFD0] bg-opacity-10" },
                { title: t('belteiis.contents.sub_program.term_itpc_aug_nov'), color: "bg-[#3430FF] bg-opacity-10" },
                { title: t('belteiis.contents.sub_program.term_itpc_nov_feb'), color: "bg-[#FFB928] bg-opacity-10" },
            ],
        },

    ];

    return (
        <section className='md:w-11/12 w-full m-auto md:px-5 px-0 pt-5'>
            {data.map((item, index) => (
                <div key={index} className='mb-2'>
                    <div className='cursor-pointer'>
                        <div className={` mt-3 overflow-hidden text-left text-sm text-gray-800 country leading-6 `}>
                            <h1 className='md:px-5 px-3 mt-3 text-[#0181ca] country md:text-2xl text-xl font-semibold'>{item.title}</h1>
                            <div className='border-[#0181ca] border-t-4 m-5 text-lg'>
                                <div className='md:flex justify-between mx-auto'>
                                    <div className='flex flex-col'>
                                        <div className="flex flex-col md:flex-row pb-5">
                                            <div className="w-full flex flex-col space-y-3">
                                                <pre className="px-4 py-2 bg-gray-50 border border-gray-200 rounded text-sm md:text-lg text-gray-800 break-words whitespace-pre-wrap"
                                                    dangerouslySetInnerHTML={{ __html: item.description }} />
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-lg shadow-md p-3">
                                            <div className="space-y-3">
                                                {/* Term Section */}
                                                <div className="flex items-center space-x-4 border-b">
                                                    <div className="bg-[#0181ca] flex justify-center items-center text-white w-10 h-10 rounded-full">
                                                        <EditCalendarIcon className="justify-center items-center w-6 h-6" />
                                                    </div>
                                                    <h1 className="md:text-xl text-lg font-bold mb-4 mt-4 text-[#0181ca]">{item.term_title}</h1>
                                                </div>
                                                {item.terms.map((term, index) => (
                                                    <div key={index} className={`p-4 rounded-lg ${term.color}`}>
                                                        <h3 className="md:text-lg text-sm">{term.title}</h3>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        
                                         <div className="bg-white rounded-lg shadow-md p-3 mt-4">
                                            <div className="space-y-3">
                                                {/* Term Section */}
                                                <div className="flex items-center space-x-4 border-b">
                                                    <h1 className="md:text-xl text-lg font-bold mb-4 mt-4 text-[#0181ca]">❖&nbsp; &nbsp; {item.dayandtime}</h1>
                                                </div>
                                                <div className="md:flex w-full gap-5">
                                                    <div className="bg-white rounded-lg shadow-md p-6 md:w-6/12 w-full">
                                                        <div className={`flex items-center text-[#0181ca] mb-4 pb-2 border-b border-[#0181ca]`} >
                                                            <AccessTimeIcon className="text-[#0181ca] mr-2" />
                                                            <h2 className="md:text-lg text-sm">{item.title_mon_fri}</h2>
                                                        </div>
                                                        <div className="flex items-center border-l-4 border-[#0181CA] pl-4 mb-4">
                                                            <h3 className="md:text-lg text-sm">8:00 AM - 10:30 AM</h3>
                                                        </div>
                                                        <div className="flex items-center border-l-4 border-[#3430FF] pl-4 mb-4">
                                                            <h3 className="md:text-lg text-sm">2:00 PM - 4:30 PM</h3>
                                                        </div>
                                                        <div className="flex items-center border-l-4 border-[#FF3B30] pl-4 mb-4">
                                                            <h3 className="md:text-lg text-sm">5:30 PM - 7:30 PM</h3>
                                                        </div>
                                                    </div>
                                                    <div className="bg-white rounded-lg shadow-md p-6 md:w-6/12 w-full">
                                                        <div className={`flex items-center text-[#0181ca] mb-4 pb-2 border-b border-[#0181ca]`} >
                                                            <AccessTimeIcon className="text-[#0181ca] mr-2" />
                                                            <h2 className="md:text-lg text-sm">{item.title_sat_sun}</h2>
                                                        </div>
                                                        <div className="flex items-center border-l-4 border-[#08BFD0] pl-4 mb-4">
                                                            <h3 className="md:text-lg text-sm">{t('belteiis.contents.sub_program.itpc_saturday')}  &nbsp; / &nbsp;  2:00 PM - 4:30 PM</h3>
                                                        </div>
                                                        <div className="flex items-center border-l-4 border-[#FFB928] pl-4 mb-4">
                                                            <h3 className="md:text-lg text-sm">{t('belteiis.contents.sub_program.itpc_sunday')}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Certificate */}
                                        <div className="bg-white rounded-lg shadow-md mt-4 p-4">
                                            <h1 className="md:text-xl text-lg font-bold mb-4 mt-4 text-[#0181ca]">❖ &nbsp; &nbsp;  {item.certificate}</h1>
                                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                                                {item.albums.map((item, index) => (
                                                    <div key={index} className="rounded-md overflow-hidden">
                                                        <img src={item.image} alt="Certification Image" className="w-full h-full object-cover" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        <div className='h-10'></div>
        </section>
    )
}
