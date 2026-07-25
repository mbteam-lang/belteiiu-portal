import { Outlet } from "react-router-dom";
import {
    GraduationCap,
    Sparkles,
    Palette,
    Shield,
    Star,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from "@/components/layout/bis/Navbar";
import Footer from "@/components/layout/bis/Footer";
import { isMobile } from 'react-device-detect';

export default function BELTEIIS() {
    const { t } = useTranslation();
    return (
        <div className="h-screen w-screen bg-gradient-to-b from-[#e8f4fd] via-[#f3f7ff] font-sans text-slate-700 flex flex-col justify-between p-4 lg:p-6 relative">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-300 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
            <div className="absolute top-1/3 right-10 w-48 h-48 bg-purple-300 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
            {!isMobile && (
                <Navbar />
            )}
            <main>
                <Outlet />
            </main>

            {!isMobile && (
                <section className="w-full max-w-7xl mx-auto space-y-3 z-20">
                    {/* Dynamic Feature Value Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
                        <div className="bg-white/80 p-3 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
                            <div className="bg-blue-50 p-2 rounded-lg text-blue-500 shrink-0"><Sparkles className="w-4 h-4" /></div>
                            <div>
                                <h4 className="font-extrabold text-slate-900 text-xs leading-none">{t('belteiis.header.main_program.ged')}</h4>
                                <p className="text-[10px] text-slate-400 mt-0.5 font-medium leading-tight">Adaptive smart system.</p>
                            </div>
                        </div>

                        <div className="bg-white/80 p-3 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
                            <div className="bg-amber-50 p-2 rounded-lg text-amber-500 shrink-0"><Palette className="w-4 h-4" /></div>
                            <div>
                                <h4 className="font-extrabold text-slate-900 text-xs leading-none">{t('belteiis.header.main_program.esl')}</h4>
                                <p className="text-[10px] text-slate-400 mt-0.5 font-medium leading-tight">Encourages curiosity.</p>
                            </div>
                        </div>

                        <div className="bg-white/80 p-3 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
                            <div className="bg-cyan-50 p-2 rounded-lg text-cyan-500 shrink-0"><Shield className="w-4 h-4" /></div>
                            <div>
                                <h4 className="font-extrabold text-slate-900 text-xs leading-none">{t('belteiis.header.main_program.csl')}</h4>
                                <p className="text-[10px] text-slate-400 mt-0.5 font-medium leading-tight">Secure campus life.</p>
                            </div>
                        </div>

                        <div className="bg-white/80 p-3 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
                            <div className="bg-indigo-50 p-2 rounded-lg text-indigo-500 shrink-0"><GraduationCap className="w-4 h-4" /></div>
                            <div>
                                <h4 className="font-extrabold text-slate-900 text-xs leading-none">{t('belteiis.header.main_program.ima')}</h4>
                                <p className="text-[10px] text-slate-400 mt-0.5 font-medium leading-tight">Dedicated mentors.</p>
                            </div>
                        </div>

                        <div className="bg-white/80 p-3 rounded-xl shadow-sm border border-slate-100 col-span-2 lg:col-span-1 flex items-center gap-3">
                            <div className="bg-yellow-50 p-2 rounded-lg text-yellow-500 shrink-0"><Star className="w-4 h-4 fill-yellow-400 stroke-yellow-500" /></div>
                            <div>
                                <h4 className="font-extrabold text-slate-900 text-xs leading-none">{t('belteiis.header.main_program.test')}</h4>
                                <p className="text-[10px] text-slate-400 mt-0.5 font-medium leading-tight">Strong foundations.</p>
                            </div>
                        </div>
                    </div>

                    {/* Dense Utility Dark Footer */}
                    <Footer />
                </section>
            )}
        </div>
    );
}