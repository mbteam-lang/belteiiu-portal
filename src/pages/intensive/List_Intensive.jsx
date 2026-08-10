import React from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '@/hooks/usePageTitle';
import { useIntensive } from '@/hooks/useIntensive';
import ListCard from '@/components/common/Card';

export default function List_Intensive() {
    usePageTitle('ថ្នាក់បំប៉ន', 'Intensive Course');
    const { intensiveData, loading } = useIntensive();

    return (
        <div className="w-full min-h-screen p-4 text-slate-800 dark:text-slate-100 transition-colors duration-200">
            <div className="grid grid-cols-1 gap-2 max-w-7xl mx-auto items-start content-start">
                {(
                    intensiveData.map((item) => (
                        <Link key={item.id} to={item.url} className="block">
                            <ListCard images={item.image} title={item.title} />
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}
