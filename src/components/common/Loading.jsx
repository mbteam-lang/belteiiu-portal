import React from "react";
import Lottie from "lottie-react";
import loadingData from "@/assets/animationJson/Loading_Circle_With_Dots.json";
import { useTranslation } from "react-i18next";

export const Loading = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center w-screen h-screen bg-transparent z-50 p-6">
      <div className="flex flex-col justify-center items-center text-gray-400 font-medium">
        {/* Lottie Animation Container */}
        <div className="w-48 h-48 md:w-60 md:h-60 transition-all duration-300">
          <Lottie 
            animationData={loadingData} 
            loop={true} 
            style={{ width: "100%", height: "100%" }} 
          />
        </div>
        {/* Text */}
        <span className="mt-4 text-center tracking-wide">{t('home.loading')}</span>
      </div>
    </div>
  );
};