import React from "react";
import usePageTitle from '@/hooks/usePageTitle';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import FacultySection from '@/components/sections/FacultySection';
import ServingVideo from "@/components/sections/VideoSection";

export default function Home() {
    usePageTitle('សាកលវិទ្យាល័យប៊ែលធី អន្តរជាតិ', 'BELTEI International University');
    return (
        <div className="select-none bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <HeroSection />
            <StatsSection />
            <FacultySection />
            <ServingVideo />
            
        </div>
    );
}