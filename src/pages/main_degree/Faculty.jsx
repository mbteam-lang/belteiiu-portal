
import { Link, useParams } from 'react-router-dom';
import { useFaculty } from '@/hooks/useFaculty';
import usePageTitle from '@/hooks/usePageTitle';

export default function Faculty() {
    const { degreesId } = useParams();
    const { facultiesData, loading } = useFaculty(degreesId);
    usePageTitle('មហាវិទ្យាល័យ' , 'Faculty');
    
    return (
        <div className='bg-[#F5F5F5] dark:bg-slate-900 min-h-screen transition-colors duration-200'>
            <div className='h-3'></div>
            <section className='max-w-7xl m-auto md:px-5 px-3'>
                {loading ? (
                    Array.from({ length: 10 }).map((_, index) => (
                        <div key={index} className="p-3 mt-3 border border-gray-200 dark:border-slate-700 shadow rounded-lg flex items-center gap-3 w-full bg-[#FFFFFF] dark:bg-slate-800 animate-pulse">
                            <div className='flex items-center gap-2'>
                                <div className='bg-gray-200 dark:bg-slate-700 rounded-md w-14 h-16 flex justify-center items-center'>
                                    <div className="w-10 h-14 bg-gray-300 dark:bg-slate-600 rounded"></div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="h-5 bg-gray-200 dark:bg-slate-700 rounded w-3/4"></div>
                            </div>
                        </div>
                    ))
                ) : facultiesData?.length === 0 ? (
                    <div className="text-center py-10">
                     
                    </div>
                ) : (
                    <div className="grid md:gap-4 gap-2 ">
                        {facultiesData && (
                            facultiesData.data?.map((items, index) => (
                                <Link key={index} to={`/major/${items.id}`} className="group">
                                    <div
                                        className="rounded-lg flex items-center gap-4 w-full text-white border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
                                        style={{
                                            backgroundColor: items.color || '#1e3a8a',
                                            borderColor: items.color || '#1e3a8a',
                                            boxShadow: items.color ? `0 4px 15px -5px ${items.color}88` : 'none'
                                        }}
                                    >
                                        <div className="flex justify-center items-center w-[80px] h-[80px] bg-white/95 dark:bg-slate-800/95 p-3 shrink-0">
                                            <img
                                                src={items.image}
                                                alt={items.faculty}
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = "https://www.beltei.edu.kh/asset/img/biu/app/assoiate.png";
                                                }}
                                                className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="text-left pr-4">
                                            <h3 className="md:text-lg text-md font-medium leading-tight">
                                                {items.faculty}
                                            </h3>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        )}
                    </div>
                )}
            </section>
            <div className='h-5'></div>
        </div>
    );
}