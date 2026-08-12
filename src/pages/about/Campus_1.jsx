import usePageTitle from '@/hooks/usePageTitle';
import { useAbout } from '@/hooks/useAbout';
import NoData from '@/components/common/Nodata';
import { useEffect } from 'react';

export default function Campus1() {
    usePageTitle('សាកលវិទ្យាល័យប៊ែលធីសាខា១', 'BEITEL IU Campus 1');
    const { about, loading } = useAbout();
    const campus1 = about?.[6];

    const getCleanedHtml = (htmlContent) => {
        if (!htmlContent) return '';

        return htmlContent
            // 1. Fixes the broken spaces inside the query URL
            .replace(
                /hl=en&amp;q=beltei international university campus 1/g,
                'q=BELTEI%20International%20University%20Campus%201'
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
                <div className='text-md text-gray-500 dark:text-white'>
                    <p dangerouslySetInnerHTML={{ __html: getCleanedHtml(campus1?.desc) }} />
                </div>
            </div>
            {!loading && (!campus1 || !campus1?.desc) && (
                <NoData />
            )}
        </div>
    );
}