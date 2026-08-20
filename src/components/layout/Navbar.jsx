import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

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
import { useLanguage } from '@/hooks/useLanguage';
import { languages } from '@/data/languages';
import ChooseLanguage from '@/components/sections/ChooseLanguage';
import { DesktopDropdown, MobileDropdown } from '@/components/sections/DropdownMenu';
import ThemeToggle from '@/components/ThemeToggle';
import logoImg from '@/assets/images/logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openMenuIndex, setOpenMenuIndex] = useState(null);
    const [isDesktop, setIsDesktop] = useState(() =>
        typeof window !== 'undefined' ? window.innerWidth >= 1024 : false
    );
    const headerRef = useRef(null);
    const location = useLocation();

    const { t } = useTranslation();
    const { selectedLanguage, setLanguage } = useLanguage();

    // Instantly close sidebar/menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
        setOpenMenuIndex(null);
    }, [location.pathname, location.search]);

    // Close menu when clicking outside on mobile
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isMenuOpen && headerRef.current && !headerRef.current.contains(e.target)) {
                setIsMenuOpen(false);
                setOpenMenuIndex(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside, { passive: true });
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isMenuOpen]);

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
        setLanguage(languageCode);
    };

    const toggleMenuIndex = (menuIndex) => {
        setOpenMenuIndex(prev => prev === menuIndex ? null : menuIndex);
    };

    return (
        <header ref={headerRef} className="py-2.5 px-3 lg:px-4 xl:px-6 relative z-50 shadow-md w-full" style={{ backgroundColor: 'var(--primary-color)' }}>
            <div className="w-full max-w-[1440px] mx-auto flex justify-between items-center gap-2">
                <Link to="/" className="text-white flex items-center font-extrabold tracking-wide hover:opacity-90 transition-opacity shrink-0">
                    <motion.img 
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        src={logoImg} 
                        alt="logo" 
                        className='lg:w-10 lg:h-10 xl:w-11 xl:h-11 w-9 h-9 mr-2 xl:mr-3' 
                    />
                    <h2 className='xl:text-2xl lg:text-xl text-lg font-black tracking-wider whitespace-nowrap'>BELTEI IU</h2>
                </Link>

                {isDesktop ? (
                    <div className="flex flex-nowrap justify-end items-center gap-0.5 lg:gap-1 xl:gap-2.5 2xl:gap-3 shrink-0">
                        <DesktopDropdown
                            index="intensive"
                            label={t("header.js_eng_com")}
                            data={intCourceMenu}
                            icon={MenuBookIcon}
                            openMenuIndex={openMenuIndex}
                            toggleMenuIndex={toggleMenuIndex}
                            t={t}
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

                    <motion.button 
                        whileTap={{ scale: 0.9 }}
                        className="cursor-pointer text-white p-1.5 hover:bg-white/10 rounded-lg transition-colors duration-200" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={isMenuOpen ? 'close' : 'open'}
                                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                                transition={{ duration: 0.15 }}
                            >
                                {isMenuOpen ? <CloseIcon fontSize="large" /> : <SegmentIcon fontSize="large" />}
                            </motion.div>
                        </AnimatePresence>
                    </motion.button>
                )}
            </div>

            <AnimatePresence>
                {(!isDesktop && isMenuOpen) && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col mt-4 space-y-1 bg-black/15 rounded-xl p-2 border border-white/10 backdrop-blur-md overflow-hidden"
                    >
                        <div className="w-full dropdown">
                            <div
                                className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-white transition-colors duration-200 cursor-pointer ${openMenuIndex === 'lang' ? 'bg-white/15 text-cyan-200' : 'hover:bg-white/5 active:bg-white/10'}`}
                                onClick={() => toggleMenuIndex('lang')}
                            >
                                <div className='flex items-center space-x-3'>
                                    <TranslateIcon fontSize="small" className={openMenuIndex === 'lang' ? 'text-cyan-200' : 'text-gray-300'} />
                                    <img src={selectedLanguage?.icon} alt="" className='w-5 h-5 rounded-full object-cover border border-white/20' />
                                    <span className='text-sm font-medium tracking-wide'>{selectedLanguage?.name}</span>
                                </div>
                                <KeyboardArrowDownIcon fontSize='small' className={`transition-transform duration-200 ease-out ${openMenuIndex === 'lang' ? 'rotate-180 text-cyan-200' : ''}`} />
                            </div>
                            <AnimatePresence>
                                {openMenuIndex === 'lang' && (
                                    <motion.ul 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                        className="bg-white/5 rounded-xl mt-1 mx-2 overflow-hidden border border-white/5 divide-y divide-white/5"
                                    >
                                        {languages.map(({ code, name, icon }) => (
                                            <li key={code}>
                                                <a href={`#${code}`} className="flex items-center space-x-3 px-4 py-3 text-gray-100 w-full hover:bg-white/10 hover:text-cyan-200 transition-colors duration-150"
                                                    onClick={() => { handleLanguageChange(code); setIsMenuOpen(false); }}>
                                                    <img src={icon} alt="" className="w-5 h-5 rounded-full object-cover" />
                                                    <span className="text-sm font-medium">{name}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
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
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;