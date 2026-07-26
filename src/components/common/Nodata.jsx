import React from "react";
import Lottie from "lottie-react";
import noDataAnimation from "@/assets/animationJson/no_data.json";
import { useTranslation } from "react-i18next";

const NoData = ({ isText = false }) => {
    const { t } = useTranslation();
    return isText ? (
        <div className="flex flex-row justify-center items-center p-12 text-gray-400 font-medium mt-10 w-full">
            {t('home.no_data_available')}
        </div>
    ) : (
         <div className="min-h-screen bg-gradient-to-b font-sans text-slate-700 flex flex-col justify-center items-center relative p-6 overflow-hidden">
             <div className="w-48 h-48 md:w-60 md:h-60 transition-all duration-300">
                <Lottie animationData={noDataAnimation} loop={true} />
            </div>
            <div className="text-center mt-2 max-w-md">
                <h3 className="text-base md:text-lg font-medium text-gray-500 tracking-tight font-khmer">
                    {t('home.no_data_available')}
                </h3>
            </div>
        </div>
    );
};

export default NoData;