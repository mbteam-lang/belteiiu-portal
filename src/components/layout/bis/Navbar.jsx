import React, { useState, useEffect } from 'react';
import { Menu, Star, ChevronDown, Info, GraduationCap, DollarSign } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { languages } from '@/data/languages';
import { setLanguage, getLanguage } from '@/services/languageService';
import { mainProgramMenu } from '@/data/menu';
import { useTranslation } from 'react-i18next';
import LogoBis from '@/assets/images/logo_bis.png';

const Navbar = () => {
    const { i18n, t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    // Track active paths dynamically via react-router-dom URL state
    const currentPath = location.pathname;
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const urlLanguage = params.get('lang');
        let currentLanguage = getLanguage();

        // If URL contains a valid language, use it
        if (urlLanguage && ['en', 'kh'].includes(urlLanguage)) {
            currentLanguage = urlLanguage;
            setLanguage(currentLanguage);
        }
        
        if (i18n.language !== currentLanguage) {
            i18n.changeLanguage(currentLanguage);
        }
        

        // Update selected language
        const selected =
            languages.find((lang) => lang.code === currentLanguage) ||
            languages[0];

        setSelectedLanguage(selected);
    }, [location.search, i18n]);
  
    const handleLanguageChange = (languageCode) => {
        const selected = languages.find((lang) => lang.code === languageCode);
        if (!selected) return;
        setLanguage(languageCode);
        // Change i18n language
        i18n.changeLanguage(languageCode);
        // Update UI
        setSelectedLanguage(selected);

        const params = new URLSearchParams(location.search);
        params.set("lang", languageCode);

        navigate(
            `${location.pathname}?${params.toString()}`,
            { replace: true }
        );
    };
    
    // Helper functions to determine active path configurations
    const isHomeActive = currentPath === '/index_bis' || currentPath === '/';
    const isAboutActive = currentPath === '*';
    const isProgramActive = mainProgramMenu.some(item => currentPath === item.link);
    const isTuitionActive = mainProgramMenu.some(item => currentPath === item.tuition);

    return (
        <header className="md:flex w-full max-w-7xl mx-auto items-center justify-between bg-white/80 backdrop-blur-md px-6 py-1 rounded-full border border-white shadow-sm z-30">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                <div className="bg-gradient-to-tr p-2 rounded-xl shadow-sm text-white">
                    <img src={LogoBis} alt="BELTEI IS" className="w-7 h-7" />
                </div>
                <div>
                    <h1 className="text-base font-black text-blue-900 tracking-tight leading-none">BELTEI</h1>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">International School</p>
                </div>
            </Link>

            <nav className="flex items-center gap-6 xl:gap-8 text-sm font-bold">
                <Link
                    to="/index_bis"
                    className={`flex items-center gap-1.5 transition-all duration-200 ${isHomeActive ? 'text-amber-500 scale-105' : 'text-slate-600 hover:text-indigo-600'
                        }`}
                >
                    <Star className={`w-4 h-4 transition-all duration-200 ${isHomeActive ? 'fill-amber-400 stroke-amber-500' : 'text-slate-400'
                        }`} />
                    &nbsp;  {t('news.home')}
                </Link>
                <Link to="*"
                    className={`flex items-center gap-1.5 transition-all duration-200 ${isAboutActive ? 'text-amber-500 scale-105' : 'text-slate-600 hover:text-indigo-600'
                        }`}
                >
                    <Info className={`w-4 h-4 transition-all duration-200 ${isAboutActive ? 'text-amber-500 stroke-[2.5px]' : 'text-slate-400'
                        }`} />
                    &nbsp;  {t('header.js_about')}
                </Link>
                <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown('program')}
                    onMouseLeave={() => setActiveDropdown(null)}
                >
                    <button
                        className={`flex items-center gap-1 transition-all duration-200 py-2 focus:outline-none ${isProgramActive ? 'text-amber-500 scale-105' : 'text-slate-600 hover:text-indigo-600'
                            }`}
                    >
                        <GraduationCap className={`w-4 h-4 transition-all duration-200 ${isProgramActive ? 'text-amber-500 stroke-[2.5px]' : 'text-slate-400'
                            }`} />
                        <span> &nbsp; {t('belteiis.header.main_program.program')}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'program' ? 'rotate-180' : ''
                            } ${isProgramActive ? 'text-amber-500' : 'text-slate-400'}`} />
                    </button>

                    {/* Sub Menu Overlay Card */}
                    {activeDropdown === 'program' && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white border border-slate-100 rounded-2xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                            {mainProgramMenu.map((item, index) => {
                                const isSubItemActive = currentPath === item.link;
                                return (
                                    <Link
                                        key={index}
                                        to={item.link}
                                        className={`block px-4 py-2 transition-colors ${isSubItemActive ? 'bg-amber-50 text-amber-600' : 'text-slate-700 hover:bg-indigo-50 hover:text-indigo-600'
                                            }`}
                                    >
                                        <span className="text-xs font-bold">
                                            {t(item.titleKey)}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Tuition Fee Dynamic Dropdown Container */}
                <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown('tuition')}
                    onMouseLeave={() => setActiveDropdown(null)}
                >
                    <button
                        className={`flex items-center gap-1 transition-all duration-200 py-2 focus:outline-none ${isTuitionActive ? 'text-amber-500 scale-105' : 'text-slate-600 hover:text-indigo-600'
                            }`}
                    >
                        <DollarSign className={`w-4 h-4 transition-all duration-200 ${isTuitionActive ? 'text-amber-500 stroke-[2.5px]' : 'text-slate-400'
                            }`} />
                        <span>  &nbsp;  {t('tuition.js_tuition_fee')}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'tuition' ? 'rotate-180' : ''
                            } ${isTuitionActive ? 'text-amber-500' : 'text-slate-400'}`} />
                    </button>

                    {/* Sub Menu Overlay Card */}
                    {activeDropdown === 'tuition' && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white border border-slate-100 rounded-2xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                            {mainProgramMenu.map((item, index) => {
                                const isSubTuitionActive = currentPath === item.tuition;
                                return (
                                    <Link
                                        key={index}
                                        to={item.tuition}
                                        className={`block px-4 py-2 transition-colors ${isSubTuitionActive ? 'bg-amber-50 text-amber-600' : 'text-slate-700 hover:bg-indigo-50 hover:text-indigo-600'
                                            }`}
                                    >
                                        <span className="text-xs font-bold">
                                            {t(item.titleKey)}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </div>
            </nav>

            {/* --- LANGUAGE SELECTOR --- */}
            <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative group">
                    <button className="bg-white hover:bg-slate-50 text-slate-700 font-bold px-4 py-2 rounded-full border border-slate-200/80 shadow-sm transition-all flex items-center gap-2 text-xs sm:text-sm focus:outline-none">
                        <span className="text-base leading-none">{selectedLanguage?.country_code}</span>
                        <span className="hidden sm:inline">{selectedLanguage?.name}</span>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
                    </button>

                    <div className="absolute right-0 top-full mt-1.5 w-36 bg-white border border-slate-100 rounded-2xl shadow-xl py-1.5 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-150 z-50">
                        {languages.map((language) => (
                            <button
                                key={language.id}
                                className="w-full flex items-center gap-3 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors text-left"
                                onClick={() => handleLanguageChange(language.code)}
                            >
                                <span className="text-base">{language.country_code}</span> {language.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;