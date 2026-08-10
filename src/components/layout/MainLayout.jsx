import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import { isMobile } from 'react-device-detect';

export default function MainLayout() {
    return (
        <div className="relative w-full min-h-screen flex flex-col bg-white dark:bg-[#282828] text-slate-900 dark:text-slate-100 transition-colors duration-200">
            {!isMobile && (
                <Navbar />
            )}
            <main className="flex-1 w-full">
                <Outlet />
            </main>
        </div>
    );
}