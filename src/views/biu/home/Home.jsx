import React from "react";
import usePageTitle from '@/hooks/usePageTitle';
import HeroSection from '@/components/sections/BIU/HeroSection';
import StatsSection from '@/components/sections/BIU/StatsSection';
import NewsSection from '@/components/sections/BIU/NewsSection';
import FacultySection from '@/components/sections/BIU/FacultySection';
import ServingVideo from "@/components/sections/BIU/VideoSection";

export default function Home() {
    usePageTitle('សាកលវិទ្យាល័យប៊ែលធី អន្តរជាតិ', 'BELTEI International University');
    return (
        <div className="select-none">
            {/* <HeroSection />
            <StatsSection />
            <NewsSection />
            <FacultySection />
            <ServingVideo /> */}
        </div>
    );
}