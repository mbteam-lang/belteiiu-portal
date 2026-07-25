import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { gedDetails } from '@/data/ged';

export default function GedDetail() {
    const { id } = useParams();
    const { t } = useTranslation();
    return (
        <section className='md:w-11/12 w-full m-auto md:px-5 px-0'>
            {gedDetails.map((mainItem, index) => { 
                const filteredDetails = mainItem.details.filter(d => d.id === parseInt(id));
                if (filteredDetails.length === 0) return null;
                return (
                    <div key={index} className='mb-2'>
                        <div className='cursor-pointer'>
                            {filteredDetails.map((subItem, index) => (
                                <div key={index} className='mt-3 overflow-hidden text-left bg-white text-sm text-gray-800 country leading-6'>
                                    <h1 className='md:px-5 px-3 mt-3 text-[#0181ca] country md:text-2xl text-xl font-semibold'>{t(subItem.title)}</h1>
                                    <div className='border-[#0181ca] border-t-4 m-5 text-lg'>
                                        <div className='m-auto flex justify-center items-center mb-5 md:px-0 mt-5'>
                                            <div className='relative w-full' style={{ paddingBottom: '56.25%' }}>
                                                <iframe 
                                                    className='absolute top-0 left-0 w-full h-full' 
                                                    src={subItem.video}
                                                    allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                                    referrerPolicy="strict-origin-when-cross-origin" 
                                                    allowFullScreen>
                                                </iframe>
                                            </div>
                                        </div>
                                        <div className='md:flex justify-between mx-auto'>
                                            <div className='flex flex-col'>
                                                {/* Description */}
                                                <div className="flex flex-col md:flex-row">
                                                    <div className="w-full flex flex-col space-y-3">
                                                        <div className="space-y-3 md:py-4 md:px-4 px-0 py-4 text-justify bg-white md:shadow-md shadow-none rounded-lg">
                                                            <pre className="px-4 py-2 bg-gray-50 border border-gray-200 rounded text-sm md:text-lg text-gray-800 break-words whitespace-pre-wrap"
                                                                dangerouslySetInnerHTML={{ __html: t(subItem.description) }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Subject */}
                                                <h1 className='md:text-xl text-lg font-bold mt-4 mb-4 text-[#0181ca]'>❖&nbsp; &nbsp; {t(mainItem.curriculum)}</h1>
                                                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4'>
                                                    {subItem.subjects && subItem.subjects.map((subject, index) => (
                                                        <div key={index} className={`h-auto rounded-md shadow-md  gap-4 py-2 px-3 w-full flex justify-start items-center my-2 ${subject.color} border-[#0181ca] border-1`}>
                                                            <div className='relative flex justify-center items-center'>
                                                                <div className='lg:w-14 lg:h-14 w-12 h-12 bg-[#BFE2EA] flex justify-center items-center rounded-full'>
                                                                    <div className='lg:w-10 lg:h-10 w-8 h-8 bg-[#0181ca] rounded-full flex justify-center items-center'>
                                                                        <div className='text-white flex justify-center items-center' style={{ width: '20px', height: '20px' }}>
                                                                            {<subject.icon />}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <h1 className='text-[#0181ca] md:text-lg text-sm'>{t(subject.title)}</h1>
                                                        </div>
                                                    ))}
                                                </div>
                                                {/* Date and Time */}
                                                <h1 className="md:text-xl text-lg font-bold mb-4 mt-4 text-[#0181ca]">❖&nbsp; &nbsp; {t(mainItem.dayandtime)}</h1>
                                                <div className="bg-white rounded-lg shadow-md p-6">
                                                    <div className="space-y-4">
                                                        {subItem.dt && subItem.dt.map((item, index) => (
                                                            <div key={index} className={`border-l-4 ${item.color} pl-4`}>
                                                                <h2 className="md:text-lg text-sm ">{t(item.title)}</h2>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                {/* Certificate */}
                                                <h1 className="md:text-xl text-lg font-bold mb-4 mt-4 text-[#0181ca]">❖&nbsp; &nbsp; {t(mainItem.certificate)}</h1>
                                                <div className="bg-white rounded-lg shadow-md p-4">
                                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                                                        {subItem.albums && subItem.albums.map((item, index) => (
                                                            <div key={index} className=" rounded-md overflow-hidden">
                                                                <img src={item.image} alt="Certification Image" className="w-full h-full object-cover" />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            })}
            <div className='h-10'></div>
        </section>
    )
}
