import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/biu/Navbar';
import { isMobile } from 'react-device-detect';

export default function BELTEIIU() {
    return (
        <div className="relative w-full min-h-screen flex flex-col">
            {!isMobile && (
                <Navbar />
            )}
            <main className="flex-1 w-full">
                <Outlet />
            </main>
        </div>
    );
};
