
import { useParams } from 'react-router-dom';
import YouTubePlayer  from '@/components/common/YouTubePlayer';
import usePageTitle from '@/hooks/usePageTitle';
import { useMajorDetail } from '@/hooks/useMajorDetail';
import NoData from '@/components/common/Nodata';

export default function Single_Major() {
    usePageTitle('មុខជំនាញលម្អិត','Major Details');
    const { majorId } = useParams();
    const {majorDetail, loading } = useMajorDetail(majorId);
    
    return (
        <div className='bg-[#F5F5F5] min-h-screen'>
            {loading ? (
                <>
                    <div className='h-3'></div>
                    <div className='h-5'></div>
                </>
            ) : majorDetail.length === 0 ? (
                <NoData/>
            ) : (
                <div>
                    <div className='h-3'></div>
                    {majorDetail.map((items, index) => (
                        <div key={items.id || index} className="py-8">
                            <div className='md:w-11/12 m-auto md:px-5 px-2'>
                                {items.video_1 && (
                                    <div className='m-auto flex justify-center items-center mb-5 md:px-0'>
                                        <YouTubePlayer videoId={items.video_1} />
                                    </div>
                                )}
                            </div>
                            <section className="max-w-7xl mx-auto md:px-5 px-2">
                                <div className="text-center mb-5">
                                    <h2 className="text-[#0a96a4] md:text-3xl text-xl font-bold">{items.title}</h2>
                                    <div className="w-24 h-1 bg-[#0a96a4] mx-auto rounded-full mt-2"></div>
                                </div>
                                <div className="mb-10">
                                    <pre className="pre1 text-justify break-words whitespace-pre-wrap text-gray-800 md:text-lg text-md p-6 border rounded-lg shadow-md bg-gray-50">
                                        {items.remark}
                                    </pre>
                                </div>
                                {items.curriculum && items.curriculum.length > 0 && (
                                    <div className="flex flex-wrap justify-center mt-6">
                                        {items.curriculum.map((album, index) => (
                                            <div className="m-2" key={index}>
                                                <img
                                                    src={album.title}
                                                    alt={`Curriculum ${index + 1}`}
                                                    className="rounded-2xl shadow-lg border border-gray-200 max-w-full h-auto"
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                                                        e.target.className += ' opacity-50';
                                                    }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {items.albums && items.albums.length > 0 && (
                                    <div className="flex flex-wrap justify-center mt-6">
                                        {items.albums.map((album, index) => (
                                            <div className="m-2" key={index}>
                                                <img 
                                                    src={album.name} 
                                                    alt={`Album ${index + 1}`}
                                                    className="rounded-2xl shadow-lg border border-gray-200 max-w-full h-auto"
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
                                                        e.target.className += ' opacity-50';
                                                    }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </section>
                            <div className='md:w-11/12 m-auto md:px-5 px-2 mt-5'>
                                {items.video_2 && (
                                    <div className='m-auto flex justify-center items-center mb-5 md:px-0'>
                                        <YouTubePlayer videoId={items.video_2} />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                    <div className='h-5'></div>
                </div>
            )}
        </div>
    );
}