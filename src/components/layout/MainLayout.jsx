import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import { isMobile } from 'react-device-detect';

export default function MainLayout() {
    useEffect(() => {
        const handleContextMenu = (e) => {
            // Block contextmenu ONLY when triggered by touch (mobile long-press),
            // while allowing mouse right-click ("Open in new tab") on desktop.
            if (e.pointerType === 'touch' || e.pointerType === 'pen' || (e.button === 0 && 'ontouchstart' in window)) {
                e.preventDefault();
            }
        };

        window.addEventListener('contextmenu', handleContextMenu, { capture: true });
        return () => {
            window.removeEventListener('contextmenu', handleContextMenu, { capture: true });
        };
    }, []);

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