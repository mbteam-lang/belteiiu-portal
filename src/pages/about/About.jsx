import usePageTitle from '@/hooks/usePageTitle'; 
import { useAbout } from '@/hooks/useAbout';

export default function BiuHistory() {
    usePageTitle('ប្រវត្តិសាកលវិទ្យាល័យប៊ែលធី', 'History of BELTEI University');
    const { about, loading } = useAbout();
    const belteiHistory = about?.[1];
    return (
        <div className="p-3 md:p-6 lg:p-8 max-w-7xl m-auto min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-200">
           {loading && (
                <>
                    <div className="space-y-3 animate-pulse">
                        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-full"></div>
                        <div className="h-72 bg-gray-200 dark:bg-slate-700 rounded w-full"></div>
                    </div>
                    {Array.from({ length: 9 }).map((_, idx) => (
                        <div
                            key={idx}
                        >
                            <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-full mt-3"></div>
                        </div>
                    ))}
                </>
            )}
            
            <div>
                {belteiHistory?.desc && (
                    <div className="md:text-left text-md text-gray-500 dark:text-slate-300">
                        <p dangerouslySetInnerHTML={{ __html: belteiHistory.desc }} />
                    </div>
                )}
            </div>
            
        </div>
    );
}