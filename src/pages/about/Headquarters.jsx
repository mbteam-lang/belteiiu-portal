
import usePageTitle from '@/hooks/usePageTitle';
import { useTranslation } from 'react-i18next';
import { useAbout } from '@/hooks/useAbout';
export default function Headquarters() {
    const { t } = useTranslation();
    usePageTitle('ទីស្នាក់ការកណ្តាលរបស់ប៊ែលធីគ្រុប', 'BELTEI Group Headquarters');
    const { about, loading } = useAbout();
    const hq = about?.[0];
    return (
        <>
            {loading && (
                <div className='max-w-7xl m-auto px-5 pt-5 min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-200'>
                    <div className='space-y-4 hq'>
                        <div className='md:grid-cols-2 gap-5 mx-auto'>
                            <div className="w-full h-64 bg-gray-200 dark:bg-slate-700 rounded"></div>
                        </div>
                        <div className='md:grid-cols-2 gap-5 mx-auto'>
                            <div className="w-full h-64 bg-gray-200 dark:bg-slate-700 rounded"></div>
                        </div>
                        <div className='space-y-2 py-2'>
                            {Array.from({ length: 9 }).map((_, index) => (
                                <div key={index} className='h-4 bg-gray-200 dark:bg-slate-700 rounded w-full'></div>
                            ))}
                        </div>

                    </div>
                </div>
            )}
            <div className='min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-200'>
                <div className="h-5"></div>
                <section className='max-w-7xl m-auto px-5'>
                    {/* <div className='m-auto flex justify-center items-center mb-5 md:px-0'>
                        <div className='relative w-full' style={{ paddingBottom: '56.25%' }}>
                            <iframe
                                className='absolute top-0 left-0 w-full h-full'
                                src={`https://www.youtube.com/embed/${hq?.video}`}
                                frameBorder="0"
                                loading="lazy"
                                rel="0"
                                modestbranding="1"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div> */}
                    <div className='space-y-4 hq'>
                        {hq && (
                            <div className='md:text-left'>
                                {/* Changed <p> to <div> and added max-w-full img classes */}
                                <div 
                                    className='text-md text-gray-700 dark:text-white [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-lg [&_img]:my-4 [&_img]:shadow-sm'
                                    dangerouslySetInnerHTML={{ __html: hq.desc }} 
                                />
                            </div>
                        )}
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe
                                    className="gmap_iframe"
                                    width="100%"
                                    src="https://maps.google.com/maps?q=BELTEI+GROUP+Headquarters&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                                ></iframe>
                                <a href="https://embedmapgenerator.com">google maps code generator</a>
                            </div>
                        </div>
                        <div className=" flex justify-end  btn-map">
                            <a href="https://goo.gl/maps/ZduxJyagGFwrt7Ht6" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full " id="btn_dir">{t('header.direction')}</a>
                        </div>
                    </div>
                </section>
                <div className='h-10'></div>
            </div>
        </>
    )
}