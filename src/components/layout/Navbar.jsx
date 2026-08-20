import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Material Icons
import SegmentIcon from '@mui/icons-material/Segment';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TranslateIcon from '@mui/icons-material/Translate';

// Unique Menu Icons
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InfoIcon from '@mui/icons-material/Info';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SchoolIcon from '@mui/icons-material/School';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
// Configurations & Custom Components
import { collabMenu, mainDegreeMenu, aboutMenu, intCourceMenu } from '@/data/menu';
import { setLanguage, getLanguage } from '@/services/languageService';
import { languages } from '@/data/languages';
import ChooseLanguage from '@/components/sections/ChooseLanguage';
import { DesktopDropdown, MobileDropdown } from '@/components/sections/DropdownMenu';
import ThemeToggle from '@/components/ThemeToggle';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openMenuIndex, setOpenMenuIndex] = useState(null);
    const [isDesktop, setIsDesktop] = useState(() =>
        typeof window !== 'undefined' ? window.innerWidth >= 1024 : false
    );
   
    const { i18n, t } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const urlLanguage = params.get('lang');
        let currentLanguage = getLanguage();

        // If URL contains a valid language, use it
        if (urlLanguage && ['en', 'kh'].includes(urlLanguage)) {
            currentLanguage = urlLanguage;
            setLanguage(currentLanguage);
        }
        
        // Change i18n language
        i18n.changeLanguage(currentLanguage);

        // Update selected language
        const selected =
            languages.find((lang) => lang.code === currentLanguage) ||
            languages[0];

        setSelectedLanguage(selected);
    }, [i18n]);
  
    useEffect(() => {
        const handleResize = () => {
            const desktop = window.innerWidth >= 1024;
            setIsDesktop(desktop);
            if (desktop) {
                setIsMenuOpen(false);
                setOpenMenuIndex(null);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLanguageChange = (languageCode) => {
        const selected = languages.find((lang) => lang.code === languageCode);
        if (!selected) return;
        setLanguage(languageCode);
        // Change i18n language
        i18n.changeLanguage(languageCode);
        // Update UI
        setSelectedLanguage(selected);

        // Update URL without reloading the page
        const url = new URL(window.location.href);
        url.searchParams.set('lang', languageCode);
        window.history.replaceState({}, '', url);
    };

    const toggleMenuIndex = (menuIndex) => {
        setOpenMenuIndex(prev => prev === menuIndex ? null : menuIndex);
    };

    return (
        <header className="py-3 px-4 relative z-50 shadow-md w-full" style={{ backgroundColor: 'var(--primary-color)' }}>
            <div className="w-full lg:container lg:mx-auto flex justify-between items-center">
                <Link to="/" className="text-white flex justify-center items-center font-extrabold tracking-wide hover:opacity-90 transition-opacity">
                    <img src="https://65fe9320beabdcd0559ee445--zingy-vacherin-f96be6.netlify.app/logo.png" alt="logo" className='lg:w-12 lg:h-12 md:w-10 md:h-10 w-9 h-9 mr-3' />
                    <h2 className='md:text-2xl text-xl font-black tracking-wider'>BELTEI IU</h2>
                </Link>

                {isDesktop ? (
                    <div className="flex flex-wrap justify-end items-center gap-1 xl:gap-4 lg:gap-2">
                        <DesktopDropdown
                            index="intensive"
                            label={t("header.js_eng_com")}
                            data={intCourceMenu}
                            icon={MenuBookIcon}
                            openMenuIndex={openMenuIndex}
                            toggleMenuIndex={toggleMenuIndex}
                            t={t}
                            // to="/list_intensive"
                        />
                        <DesktopDropdown
                            index="about"
                            label={t("header.js_about")}
                            data={aboutMenu}
                            icon={InfoIcon}
                            openMenuIndex={openMenuIndex}
                            toggleMenuIndex={toggleMenuIndex}
                            t={t}
                            to='/history'
                        />
                        <DesktopDropdown
                            index="collab"
                            label={t("header.js_colab")}
                            data={collabMenu}
                            icon={HandshakeIcon}
                            openMenuIndex={openMenuIndex}
                            toggleMenuIndex={toggleMenuIndex}
                            t={t}
                            to="/list_collaboration"
                        />
                        <DesktopDropdown
                            index="degree"
                            label={t("header.js_degree")}
                            data={mainDegreeMenu}
                            icon={SchoolIcon}
                            openMenuIndex={openMenuIndex}
                            toggleMenuIndex={toggleMenuIndex}
                            t={t}
                            to="/list_main"
                        />
                        <DesktopDropdown
                            index="dorm"
                            label={t("header.js_dorm")}
                            icon={MeetingRoomIcon}
                            openMenuIndex={openMenuIndex}
                            toggleMenuIndex={toggleMenuIndex}
                            t={t}
                            to="/dormitory"
                        />
                   
                        <DesktopDropdown
                            index="terms"
                            label={t("term_condition.js_sub_title")}
                            icon={LocalPoliceIcon}
                            openMenuIndex={openMenuIndex}
                            toggleMenuIndex={toggleMenuIndex}
                            t={t}
                            to="/term_condition"
                        />
                        <ChooseLanguage
                            languages={languages}
                            selectedLanguage={selectedLanguage}
                            handleLanguageChange={handleLanguageChange}
                        />
                        <ThemeToggle />
                    </div>
                ) : (
                    <div className="cursor-pointer text-white p-1 hover:bg-white/10 rounded-lg transition-colors duration-200" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <CloseIcon fontSize="large" /> : <SegmentIcon fontSize="large" />}
                    </div>
                )}
            </div>

            {(!isDesktop && isMenuOpen) && (
                <div className="flex flex-col mt-4 space-y-1 bg-black/10 rounded-xl p-2 border border-white/5 backdrop-blur-sm">
                    <div className="w-full dropdown">
                        <div
                            className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-white transition-colors ${openMenuIndex === 'lang' ? 'bg-white/10 text-cyan-200' : 'hover:bg-white/5'}`}
                            onClick={() => toggleMenuIndex('lang')}
                        >
                            <div className='flex items-center space-x-3'>
                                <TranslateIcon fontSize="small" className={openMenuIndex === 'lang' ? 'text-cyan-200' : 'text-gray-300'} />
                                <img src={selectedLanguage?.icon} alt="" className='w-5 h-5 rounded-full object-cover border border-white/20' />
                                <span className='text-sm font-medium tracking-wide'>{selectedLanguage?.name}</span>
                            </div>
                            <KeyboardArrowDownIcon fontSize='small' className={`transition-transform duration-200 ${openMenuIndex === 'lang' ? 'rotate-180' : ''}`} />
                        </div>
                        {openMenuIndex === 'lang' && (
                            <ul className="bg-white/5 rounded-xl mt-1 mx-2 overflow-hidden border border-white/5 divide-y divide-white/5">
                                {languages.map(({ code, name, icon }) => (
                                    <li key={code}>
                                        <a href={`#${code}`} className="flex items-center space-x-3 px-4 py-3 text-gray-100 w-full hover:bg-white/10 hover:text-cyan-200 transition-all"
                                            onClick={() => { handleLanguageChange(code); setIsMenuOpen(false); }}>
                                            <img src={icon} alt="" className="w-5 h-5 rounded-full object-cover" />
                                            <span className="text-sm font-medium">{name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <MobileDropdown
                        index="intensive"
                        label={t("header.js_eng_com")}
                        data={intCourceMenu}
                        icon={MenuBookIcon}
                        openMenuIndex={openMenuIndex}
                        toggleMenuIndex={toggleMenuIndex}
                        setIsMenuOpen={setIsMenuOpen}
                        t={t}
                    />
                    <MobileDropdown
                        index="about"
                        label={t("header.js_about")}
                        data={aboutMenu}
                        icon={InfoIcon}
                        openMenuIndex={openMenuIndex}
                        toggleMenuIndex={toggleMenuIndex}
                        setIsMenuOpen={setIsMenuOpen}
                        t={t}
                    />
                    <MobileDropdown
                        index="collab"
                        label={t("header.js_colab")}
                        data={collabMenu}
                        icon={HandshakeIcon}
                        openMenuIndex={openMenuIndex}
                        toggleMenuIndex={toggleMenuIndex}
                        setIsMenuOpen={setIsMenuOpen}
                        t={t}
                    />
                    <MobileDropdown
                        index="degree"
                        label={t("header.js_degree")}
                        data={mainDegreeMenu}
                        icon={SchoolIcon}
                        openMenuIndex={openMenuIndex}
                        toggleMenuIndex={toggleMenuIndex}
                        setIsMenuOpen={setIsMenuOpen}
                        t={t}
                    />
                    <MobileDropdown
                        index="dorm"
                        label={t("header.js_dorm")}
                        icon={MeetingRoomIcon}
                        openMenuIndex={openMenuIndex}
                        toggleMenuIndex={toggleMenuIndex}
                        setIsMenuOpen={setIsMenuOpen}
                        t={t}
                        to="/dormitory"
                    />
                    <MobileDropdown
                        index="terms"
                        label={t("term_condition.js_sub_title")}
                        icon={LocalPoliceIcon}
                        openMenuIndex={openMenuIndex}
                        toggleMenuIndex={toggleMenuIndex}
                        setIsMenuOpen={setIsMenuOpen}
                        t={t}
                        to="/term_condition"
                    />

                    <div className="flex justify-between items-center px-4 py-2 mt-2 border-t border-white/10 pt-3">
                        <span className="text-sm font-medium text-white/80">Theme Mode</span>
                        <ThemeToggle />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;