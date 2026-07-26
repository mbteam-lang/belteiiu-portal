import React from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '@/hooks/usePageTitle';
import { useIntensive } from '@/hooks/useIntensive';
import ListCard from '@/components/common/Card';

export default function List_Intensive() {
    usePageTitle('ថ្នាក់បំប៉ន', 'Intensive Course');
    const { intensiveData, loading } = useIntensive();

    return (
        <div className="grid grid-cols-1 md:gap-2 p-4 md:space-y-0 space-y-2 max-w-7xl m-auto">
            {loading && (
                 Array.from({ length: 6 }).map((_, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-between bg-white rounded-lg shadow-sm px-4 md:py-3 py-2 animate-pulse "
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gray-200 rounded" />
                            <div className="h-4 w-32 bg-gray-200 rounded" />
                        </div>
                        <div className="w-6 h-6 bg-gray-200 rounded-full" />
                    </div>
                    
                ))
            )}

            {intensiveData.map((item) => (
                <Link key={item.id} to={item.url}>
                    <ListCard images={item.image} title={item.title} />
                </Link>
            ))}
        </div>
    );
}
