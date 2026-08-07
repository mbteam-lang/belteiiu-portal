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
                {loading ? (
                    Array.from({ length: 6 }).map((_, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between bg-white dark:bg-slate-800 rounded-xl shadow-sm px-4 py-3.5 animate-pulse border border-gray-100 dark:border-slate-700"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-200 dark:bg-slate-700 rounded-xl shrink-0" />
                                <div className="h-4 w-32 bg-gray-200 dark:bg-slate-700 rounded" />
                            </div>
                            <div className="w-6 h-6 bg-gray-200 dark:bg-slate-700 rounded-full shrink-0" />
                        </div>
                    ))
                ) : (
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
