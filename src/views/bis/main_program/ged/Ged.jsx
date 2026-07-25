import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SchoolIcon from '@mui/icons-material/School';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import usePageTitle from '@/hooks/usePageTitle';
import { gedMenu } from '@/data/ged';

export default function Ged() {
    usePageTitle('ចំណេះទូទៅ', 'General Education');
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <section className='w-11/12 m-auto md:px-5 px-0'>
            <div className="rounded-lg shadow-md p-6 mb-6">
                {gedMenu.map((item, index) => (
                    <div className="space-y-4" key={index}>
                        <div className='flex items-center gap-4 border-b pb-4 mb-4'>
                            <div className='lg:w-14 lg:h-14 w-12 h-12 bg-[#BFE2EA] flex justify-center items-center rounded-full'>
                                <div className='lg:w-10 lg:h-10 w-8 h-8 bg-[#0181ca] rounded-full flex justify-center items-center'>
                                    <div className='text-white flex justify-center items-center' style={{ width: '20px', height: '20px' }}>
                                        <SchoolIcon />
                                    </div>
                                </div>
                            </div>
                            <h2 className="md:text-xl text-lg font-semibold text-gray-600">{t(item.title)}</h2>
                        </div>
                        {item.sub_programs && item.sub_programs.map((sub_program) => (
                            <div key={sub_program.id} className={`p-2 rounded-lg mt-3 ${sub_program.color} flex justify-between items-center cursor-pointer`} 
                                onClick={() => {navigate(`/bis/ged-details/${sub_program.id}`)}}>
                                <div className="flex-shrink-0 w-12 h-16 md:w-20 md:h-24 overflow-hidden rounded-lg mr-4">
                                    <img src={sub_program.image} alt="Certification Image" className="w-full h-full object-contain object-center " />
                                </div>
                                <h3 className="flex-grow md:text-lg text-sm text-[#757575]">
                                    {t(sub_program.title)}
                                </h3>
                                <div className="flex-shrink-0 mr-5">
                                    <ArrowForwardIosIcon style={{ fontSize: '18px', color: '#757575' }} />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};
