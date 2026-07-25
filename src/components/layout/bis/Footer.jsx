import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-gradient-to-r from-blue-950 to-indigo-950 text-white p-3.5 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            {/* Left Side: Address */}
            <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <p className="text-[11px] text-slate-300 leading-normal font-medium">
                    {t('belteiis.footer.address')}
                </p>
            </div>

            {/* Right Side: Language Selector Dropdown (Placed exactly in the empty spot) */}
            <div className="relative group self-center md:self-auto">
                <Link to="/term_bis" className="flex items-center gap-2.5 hover:text-white transition-colors group">
                    <Info className="w-4 h-4 text-blue-400 shrink-0 group-hover:text-blue-300 transition-colors" />
                    <p className="text-[11px] text-slate-300 leading-normal font-medium underline decoration-slate-500/50 underline-offset-2">
                        {t('belteiis.contents.condition.js_sub_title')}
                    </p>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;