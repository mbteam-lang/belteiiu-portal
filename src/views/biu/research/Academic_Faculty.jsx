import { useState, useEffect } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link, useParams } from 'react-router-dom';
import { useAcademicFaculty } from '@/hooks/useAcademicFaculty';
import usePageTitle from '@/hooks/usePageTitle';
import NoData from '@/components/common/Nodata';

export default function Academic_Faculty() {
    const { id } = useParams();
    usePageTitle('កិច្ចការស្រាវជ្រាវ' , 'Academic Research');
    const { academicFaculty, loading } = useAcademicFaculty(id);
    return (
        <>
            {loading &&(
                Array.from({ length: 5 }).map((_, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between bg-white rounded-lg shadow-sm px-3 py-1 animate-pulse max-w-7xl m-auto"
                    >
                        <div className="flex items-center w-full">
                            <div className="w-16 h-16 bg-gray-200 rounded-md"></div>

                            <div className="flex-1 ml-3">
                                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            </div>
                        </div>
                    </div>
                ))
            )}
            <div className='bg-[#F5F5F5]'>
                <div className='h-3'></div>
                <section className='max-w-7xl m-auto md:px-5 px-2'>
                    {academicFaculty.length > 0 ? (
                        academicFaculty.map((items, index) => (
                            <Link key={index} to={`/biu/academic_researches/${items.id}`}>
                            <button
                                className="px-3 mt-3 border shadow rounded-lg flex items-center gap-3 w-full bg-[#FFFFFF]"
                                style={{ borderColor: items.color }}
                            >
                                <div className="flex items-center gap-2">
                                    <div className="bg-white rounded-md w-12 h-16 flex justify-center items-center">
                                        <img src={items.image} alt="" className="w-10 h-14" />
                                    </div>
                                </div>
                                <div className="text-gray-800 country md:text-lg text-md text-left">
                                    {items.title}
                                </div>
                            </button>
                            </Link>
                        ))
                        ) : (
                            <NoData/>
                        )
                    }
                </section>
                <div className='h-5'></div>
            </div>
        </>
    );
}
