import React from "react";
import { useTranslation } from "react-i18next";
import {
    Play,
    User,
    MapPin,
    Phone,
    Mail,
    Globe,
    ArrowRight,
} from "lucide-react";

export default function HeroSection() {
    const { t } = useTranslation();

    return (
        <section className="cover mx-auto main_contain relative min-h-0 lg:min-h-screen flex flex-col items-center justify-center overflow-hidden py-12 sm:py-16 lg:py-24">
            {/* Background overlays */}
            <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[3px] pointer-events-none z-0" />
            <div className="absolute top-0 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/3 right-[-5%] w-[35vw] h-[35vw] bg-indigo-500/10 rounded-full blur-3xl hidden lg:block pointer-events-none" />

            {/* Main Hero Container */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

                    {/* LEFT COLUMN: Typography & Actions */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8 text-left">
                        
                        {/* Pill Badge */}
                        <div className="animated fadeInDown inline-flex items-center self-start gap-2 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#353535]/95 backdrop-blur-sm border border-slate-200 text-indigo-700 dark:text-indigo-300 shadow-sm transition-all duration-300 hover:bg-white dark:hover:bg-slate-800">
                            <User size={14} className="animate-bounce text-indigo-600" />
                            <span className="text-xs font-bold tracking-wider uppercase">
                                {t("welcome.js_wlcome")}
                            </span>
                        </div>

                        {/* Headings */}
                        <div className="space-y-3">
                            <h1 className="animated fadeInDown text-3xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.15] drop-shadow-md">
                                {t("welcome.js_university")} <br />
                                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
                                    {t("welcome.js_beltei")}
                                </span>{" "}
                                <span className="text-slate-100">{t("welcome.js_international")}</span>
                            </h1>
                        </div>

                        {/* Slogan */}
                        <p className="animated fadeInDown text-sm sm:text-base md:text-lg text-slate-200 max-w-xl leading-relaxed font-medium drop-shadow-sm bg-slate-950/30 p-4 rounded-xl backdrop-blur-sm">
                            {t("welcome.js_decs")} {t("welcome.js_slogan")}
                        </p>

                        {/* Call to Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:items-center pt-2 animated fadeInDown">
                            <button className="group w-full sm:w-auto justify-center px-8 py-4 bg-[#0a96a4] dark:bg-[#075f73] text-white font-semibold rounded-xl shadow-lg shadow-indigo-950/30 hover:bg-[#08818d] dark:hover:bg-[#054c5c] active:scale-95 transition-all duration-200 flex items-center gap-2">
                                Explore Services
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="group w-full sm:w-auto justify-center flex items-center gap-3 px-5 py-3 text-white font-bold hover:text-indigo-300 transition-colors duration-200">
                                <span className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md group-hover:border-white/40 group-hover:bg-white/20 transition-all duration-200">
                                    <Play size={16} fill="currentColor" className="ml-0.5 text-white" />
                                </span>
                                Watch Video
                            </button>
                        </div>

                        {/* 1. DESKTOP ONLY CONTACT PANEL (Keeps layout clean on big screens) */}
                        <div className="hidden lg:block w-full max-w-3xl pt-4">
                            <ContactGrid />
                        </div>

                    </div>

                    {/* RIGHT COLUMN: Interactive Hero Graphic (Mobile Middle, Desktop Right) */}
                    <div className="lg:col-span-5 flex flex-col items-center justify-center relative h-full mt-6 lg:mt-0 z-10">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-[2rem] -rotate-3 scale-95 pointer-events-none blur-sm" />
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm shadow-2xl rounded-[2rem] rotate-1 pointer-events-none border border-white/10" />

                        <div className="relative p-2 transition-transform duration-500 hover:scale-[1.01] rounded-[2rem] w-full max-w-[340px] sm:max-w-[420px] lg:max-w-none">
                            <img
                                src="https://maisontpe.fr/_next/image?url=%2Fimages%2Ffigma%2Fdemo-woman.png&w=1200&q=75"
                                className="w-full h-auto max-h-[380px] lg:max-h-[550px] object-contain drop-shadow-2xl fit-cover"
                                alt="BELTEI Hero Graphics"
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-12 w-full pt-6 pb-12 ">
                        <ContactGrid />
                    </div>

                </div>
            </div>
        </section>
    );
}

/* Extracted Contact Grid Component to keep layout clean and dry */
function ContactGrid() {
    return (
        <div className="animated fadeInDown bg-slate-950/40 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 overflow-hidden group hover:shadow-slate-950/50 transition-all duration-300">
            <div className="bg-[#0a96a4] dark:bg-[#075f73] text-white py-3.5 px-6">
                <h2 className="text-md md:text-lg font-bold tracking-wide">
                    Contact BELTEI University
                </h2>
                <p className="text-slate-200 text-xs mt-0.5 opacity-90">
                    We're here to help you with admissions and info.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10 bg-white/5 dark:bg-gray-800/5">
                {/* Phone Card */}
                <div className="p-4 sm:p-5 text-center flex flex-col items-center justify-center hover:bg-white/10 transition-colors duration-200">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center mb-2">
                        <Phone size={16} />
                    </div>
                    <p className="text-xs font-bold text-slate-200">Phone</p>
                    <p className="text-[11px] font-medium text-slate-300 mt-1 hover:text-blue-300 cursor-pointer transition-colors">(+855) 23 999 999</p>
                </div>

                {/* Email Card */}
                <div className="p-4 sm:p-5 text-center flex flex-col items-center justify-center hover:bg-white/10 transition-colors duration-200 border-t-0">
                    <div className="w-9 h-9 rounded-xl bg-rose-500/20 text-rose-300 flex items-center justify-center mb-2">
                        <Mail size={16} />
                    </div>
                    <p className="text-xs font-bold text-slate-200">Email</p>
                    <p className="text-[11px] font-medium text-slate-300 mt-1 hover:text-rose-300 cursor-pointer transition-colors break-all px-1">info@beltei.edu.kh</p>
                </div>

                {/* Address Card */}
                <div className="p-4 sm:p-5 text-center flex flex-col items-center justify-center hover:bg-white/10 transition-colors duration-200">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-2">
                        <MapPin size={16} />
                    </div>
                    <p className="text-xs font-bold text-slate-200">Address</p>
                    <p className="text-[11px] font-medium text-slate-300 mt-1">Phnom Penh, KH</p>
                </div>

                {/* Website Card */}
                <div className="p-4 sm:p-5 text-center flex flex-col items-center justify-center hover:bg-white/10 transition-colors duration-200">
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center mb-2">
                        <Globe size={16} />
                    </div>
                    <p className="text-xs font-bold text-slate-200">Website</p>
                    <p className="text-[11px] font-medium text-slate-300 mt-1 hover:text-indigo-300 cursor-pointer transition-colors">beltei.edu.kh</p>
                </div>
            </div>
        </div>
    );
}