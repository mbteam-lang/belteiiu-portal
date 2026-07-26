import { useState } from 'react';
import { Link } from 'react-router-dom';
import ListCard from '@/components/common/Card';
import usePageTitle from '@/hooks/usePageTitle';
import { library } from '../../data/library';


export default function Other_Library() {
    const [pageTitle, setPageTitle] = useState('BELTEI IU');
    usePageTitle('OTHERS LIBRARIES');
    

    return (
        <>
            <div>
                <div className='w-full flex justify-start items-center h-18 bg-blue-500 py-4 px-6'>
                    <h1 className='text-white font-medium md:text-xl text-lg'> OTHERS LIBRARIES </h1>
                </div>
                <div className='grid grid-cols-1 md:gap-3 p-2 md:space-y-0 space-y-2  max-w-7xl m-auto' >
                    {library.map((items) => (
                        <Link key={items.id} to={items.url} rel="noopener noreferrer" className="">
                            <ListCard
                                images={items.image}
                                title={items.title}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
