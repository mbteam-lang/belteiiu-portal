import { useState, useEffect, useRef } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link, useParams } from 'react-router-dom';
import { useMajor } from '@/hooks/useMajor';
import usePageTitle from '@/hooks/usePageTitle';
import NoData from '@/components/common/Nodata';

export default function Majors() {
    const { facultiesId } = useParams();
    const { majors, loading } = useMajor(facultiesId);
    usePageTitle('មុខជំនាញ' , 'Major');
    return (
        <div className='bg-[#F5F5F5] min-h-screen'>
            {loading ? (
                <section className='max-w-7xl m-auto md:px-5 px-2'>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div 
                            key={index} 
                            className="p-3 mt-3 border shadow rounded-lg flex items-center w-full gap-4 bg-[#FFFFFF] animate-pulse"
                        >
                            <div className='flex items-center'>
                                <div className='bg-gray-200 h-10 w-10 flex justify-center items-center rounded-full'>
                                    <div className="h-4 w-4 bg-gray-300 rounded"></div>
                                </div>
                            </div>
                            <div className='flex justify-between w-full items-center'>
                                <div className='flex-1'>
                                    <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
                                </div>
                                <div className="h-6 w-6 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                    ))}
                </section>
            ) : (
                <div>
                    <div className='h-3'></div>
                    <section className='max-w-7xl m-auto md:px-5 px-2'>
                        {majors?.length === 0 ? (
                            <NoData/>
                        ) : (majors.map((items, index) => (
                                <Link
                                    key={items.id || index}
                                    to={`/biu/single-major/${items.id}`}
                                    onClick={() => {
                                        window.history.scrollRestoration = 'manual';
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    <button className="p-3 mt-3 border shadow rounded-lg flex items-center w-full gap-4 bg-[#FFFFFF] hover:bg-gray-50 transition-colors">
                                        <div className='flex items-center'>
                                            <div className='bg-[#0a96a4] h-10 w-10 flex justify-center items-center rounded-full text-white font-medium'>
                                                <h1 className='md:text-lg text-sm'>{index + 1}</h1>
                                            </div>
                                        </div>
                                        <div className='flex justify-between w-full items-center'>
                                            <div className='text-gray-800 text-left country md:text-lg text-md flex-1'>
                                                {items.majors}
                                            </div>
                                            <NavigateNextIcon className="text-gray-400" />
                                        </div>
                                    </button>
                                </Link>
                            ))
                        )}
                    </section>
                    <div className='h-5'></div>
                </div>
            )}
        </div>
    );
}