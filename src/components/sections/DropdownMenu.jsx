import React, { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const DesktopDropdown = ({
    index,
    label,
    data = [],
    icon: Icon,
    openMenuIndex,
    toggleMenuIndex,
    t,
    to
}) => {
    const navigate = useNavigate();
    const dropdownRef = useRef(null);
    const timeoutRef = useRef(null);

    const isOpen = openMenuIndex === index;

    // Show dropdown list and arrow ONLY if there is sub-menu data AND no direct route ('to')
    const hasDropdown = !to && Array.isArray(data) && data.length > 0;

    const translate = (key) => (typeof t === 'function' ? t(key) || key : key);

    // Click outside to close
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                toggleMenuIndex(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, toggleMenuIndex]);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (hasDropdown) {
            toggleMenuIndex(index);
        }
    };

    const handleMouseLeave = () => {
        if (hasDropdown) {
            timeoutRef.current = setTimeout(() => {
                toggleMenuIndex(null);
            }, 150);
        }
    };

    return (
        <div
            ref={dropdownRef}
            className="relative inline-block text-left dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={`flex items-center gap-1 xl:gap-2 px-1 lg:px-2 xl:px-3 py-2 transition-all duration-200 cursor-pointer select-none group rounded-lg ${
                    isOpen ? 'bg-white/10 text-cyan-200' : 'text-white hover:bg-white/5 hover:text-cyan-200'
                }`}
                onClick={() => {
                    if (to) {
                        navigate(to);
                        toggleMenuIndex(null);
                    } else if (hasDropdown) {
                        toggleMenuIndex(isOpen ? null : index);
                    }
                }}
            >
                {Icon && (
                    <Icon
                        fontSize="small"
                        className={`transition-colors duration-200 ${
                            isOpen ? 'text-cyan-200' : 'text-gray-200 group-hover:text-cyan-200'
                        }`}
                    />
                )}
                <span className="text-xs lg:text-sm xl:text-base font-medium tracking-wide whitespace-nowrap">
                    {translate(label)}
                </span>
                {hasDropdown && (
                    <KeyboardArrowDownIcon
                        fontSize="small"
                        className={`transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-cyan-200' : 'text-gray-300 group-hover:text-cyan-200'
                        }`}
                    />
                )}
            </div>

            {isOpen && hasDropdown && (
                <div className="absolute left-0 top-full z-50 pt-2 min-w-full w-max origin-top-left">
                    <ul className="rounded-xl border border-gray-100 dark:border-slate-700 bg-white/95 dark:bg-[#353535]/95 p-1 shadow-xl backdrop-blur-md">
                        {data.map((item, i) => (
                            <li key={i} className="w-full">
                                <Link
                                    to={item.link || '#'}
                                    onClick={() => toggleMenuIndex(null)}
                                    className="group flex w-full items-center justify-between rounded-lg px-3.5 py-2.5 text-[13px] text-gray-600 dark:text-slate-200 transition-all duration-200 hover:bg-[#1fcfe0] hover:text-white"
                                >
                                    <span className="font-medium tracking-wide transition-transform duration-200 group-hover:translate-x-0.5">
                                        {translate(item.titleKey)}
                                    </span>
                                    <svg
                                        className="h-4 w-4 -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export const MobileDropdown = ({
    index,
    label,
    data = [],
    icon: Icon,
    openMenuIndex,
    toggleMenuIndex,
    setIsMenuOpen,
    t,
    to
}) => {
    const navigate = useNavigate();
    const isOpen = openMenuIndex === index;
    const hasDropdown = !to && Array.isArray(data) && data.length > 0;
    const translate = (key) => (typeof t === 'function' ? t(key) || key : key);

    return (
        <div className="w-full dropdown">
            <div
                className={`flex items-center justify-between w-full rounded-lg px-4 py-3 text-white transition-colors cursor-pointer ${
                    isOpen ? 'bg-white/10 text-cyan-200' : 'hover:bg-white/5'
                }`}
                onClick={() => {
                    if (to) {
                        navigate(to);
                        setIsMenuOpen && setIsMenuOpen(false);
                    } else if (hasDropdown) {
                        toggleMenuIndex(isOpen ? null : index);
                    }
                }}
            >
                <div className="flex items-center gap-3">
                    {Icon && (
                        <Icon
                            fontSize="small"
                            className={isOpen ? 'text-cyan-200' : 'text-gray-300'}
                        />
                    )}
                    <span className="text-sm font-medium tracking-wide">{translate(label)}</span>
                </div>
                {hasDropdown && (
                    <KeyboardArrowDownIcon
                        fontSize="small"
                        className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                )}
            </div>

            {isOpen && hasDropdown && (
                <ul className="mt-1 mx-2 divide-y divide-white/5 overflow-hidden rounded-xl border border-white/5 bg-white/5">
                    {data.map((item, i) => (
                        <li key={i}>
                            <Link
                                to={item.link || '#'}
                                className="block px-5 py-3 text-sm text-gray-200 transition-all hover:bg-white/10 hover:text-cyan-200"
                                onClick={() => {
                                    toggleMenuIndex(null);
                                    setIsMenuOpen && setIsMenuOpen(false);
                                }}
                            >
                                {translate(item.titleKey)}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


