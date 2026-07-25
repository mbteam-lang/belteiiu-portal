import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const DesktopDropdown = ({ index, label, data, icon: Icon, openMenuIndex, toggleMenuIndex, t, to }) => {
    const isOpen = openMenuIndex === index;

    return (
        <div className="relative inline-block text-left dropdown">
            {/* <div
                className={`flex items-center gap-1 xl:gap-2 px-1 lg:px-2 xl:px-3 py-2 transition-all duration-200 cursor-pointer select-none group rounded-lg ${
                    isOpen ? 'bg-white/10 text-cyan-200' : 'text-white hover:bg-white/5 hover:text-cyan-200'
                }`}
                onClick={() => {
                    if (to) {
                        console.log(to);
                        navigate(to);
                    } else {
                        toggleMenuIndex(index);
                    }
                }}
            > */}
                <Link to={to} className={`flex items-center gap-1 xl:gap-2 px-1 lg:px-2 xl:px-3 py-2 transition-all duration-200 cursor-pointer select-none group rounded-lg ${
                    isOpen ? 'bg-white/10 text-cyan-200' : 'text-white hover:bg-white/5 hover:text-cyan-200'
                }`}>
                    {Icon && <Icon fontSize="small" className={`transition-colors duration-200 ${isOpen ? 'text-cyan-200' : 'text-gray-200 group-hover:text-cyan-200'}`} />}
                    <span className="text-xs lg:text-sm xl:text-base font-medium tracking-wide whitespace-nowrap">{t(label)}</span>
                </Link>
                
            {/* </div> */}

            {/* {isOpen && (
                <ul className="absolute left-0 mt-2 w-max min-w-full origin-top-left rounded-xl border border-gray-100 bg-white/70 p-1 shadow-xl backdrop-blur-md z-50 ">
                    {data.map((item, i) => (
                        <li key={i} className="w-full">
                            <Link to={item.link || '#'} className="group flex items-center justify-between rounded-lg px-3.5 py-2.5 text-[13px] text-gray-600 hover:bg-[#1fcfe0] hover:text-white transition-all duration-200 w-full">
                                <span className="font-medium tracking-wide transition-transform duration-200 group-hover:translate-x-0.5">{t(item.titleKey) || item.titleKey}</span>
                                <svg className="h-4 w-4 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </li>
                    ))}
                </ul>
            )} */}
        </div>
    );
};

export const MobileDropdown = ({ index, label, data, icon: Icon, openMenuIndex, toggleMenuIndex, setIsMenuOpen, t }) => {
    const isOpen = openMenuIndex === index;
    return (
        <div className="w-full dropdown">
            <div
                className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-white transition-colors ${isOpen ? 'bg-white/10 text-cyan-200' : 'hover:bg-white/5'}`}
                onClick={() => toggleMenuIndex(index)}
            >
                <div className="flex items-center gap-3">
                    {Icon && <Icon fontSize="small" className={isOpen ? 'text-cyan-200' : 'text-gray-300'} />}
                    <span className='text-sm font-medium tracking-wide'>{t(label)}</span>
                </div>
                <KeyboardArrowDownIcon fontSize='small' className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            {isOpen && (
                <ul className="bg-white/5 rounded-xl mt-1 mx-2 overflow-hidden border border-white/5 divide-y divide-white/5">
                    {data.map((item, i) => (
                        <li key={i}>
                            <Link to={item.link} className="block px-5 py-3 text-sm text-gray-200 hover:bg-white/10 hover:text-cyan-200 transition-all" onClick={() => setIsMenuOpen(false)}>
                                {t(item.titleKey)}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};