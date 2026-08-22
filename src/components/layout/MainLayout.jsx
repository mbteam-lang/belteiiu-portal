// src/components/layout/MainLayout.jsx

import React, { useEffect, useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import { isMobile as deviceIsMobile } from 'react-device-detect';

export default function MainLayout() {
    const location = useLocation();

    // Synchronous mobile & webview detection to prevent any initial UI flash
    const isMobileClient = useMemo(() => {
        if (typeof window === 'undefined') return false;
        if (deviceIsMobile) return true;
        const params = new URLSearchParams(window.location.search);
        if (params.get('mobile') === 'true' || params.get('is_mobile') === 'true' || params.get('app') === 'true') {
            return true;
        }
        return false;
    }, []);

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
        <div className="relative w-full min-h-screen min-h-[100dvh] flex flex-col bg-white dark:bg-[#282828] text-slate-900 dark:text-slate-100 transition-colors duration-200">
            {!isMobileClient && (
                <Navbar />
            )}
            <main className="flex-1 w-full overflow-hidden">
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full"
                >
                    <Outlet />
                </motion.div>
            </main>
        </div>
    );
}