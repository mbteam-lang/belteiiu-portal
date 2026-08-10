import usePageTitle from '@/hooks/usePageTitle';
import NoData from '@/components/common/Nodata';
import { useAbout } from '@/hooks/useAbout';

export default function Campus2() {
    usePageTitle('សាកលវិទ្យាល័យប៊ែលធីសាខា២', 'BEITEL IU Campus 2');
    const { about, loading } = useAbout();
    const campus2 = about?.[7];

    // Show map 
    const getCleanedHtml = (htmlContent) => {
        if (!htmlContent) return '';

        return htmlContent
            // 1. Fixes the broken spaces inside the query URL
            .replace(
                /hl=en&amp;q=beltei international university campus 2/g,
                'q=BELTEI%20International%20University%20Campus%202'
            )
            // 2. Fixes the empty sandbox restriction so the map can render scripts
            .replace(
                /sandbox=""/g,
                'sandbox="allow-scripts allow-same-origin allow-popups"'
            );
    };

    return (
        <div className='p-3 md:p-6 lg:p-8 max-w-7xl m-auto min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-200'>
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
            <div className='md:text-left'>
                <div className='text-md text-gray-500 dark:text-slate-300'>
                    {/* Cleaned content passed here */}
                    <p dangerouslySetInnerHTML={{ __html: getCleanedHtml(campus2?.desc) }} />
                </div>
            </div>
            {!loading && campus2.length === 0 && (
                <NoData />
            )}
        </div>
    );
}