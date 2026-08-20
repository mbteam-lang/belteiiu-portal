// src/context/LanguageContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getLanguage, setLanguage as persistLanguage } from '@/services/languageService';
import { languages } from '@/data/languages';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
    const { i18n, t } = useTranslation();
    const [lang, setLangState] = useState(() => getLanguage() || 'en');
    const [selectedLanguage, setSelectedLanguage] = useState(() => {
        const current = getLanguage() || 'en';
        return languages.find((l) => l.code === current) || languages[0];
    });

    const setLanguage = (newLang) => {
        const selected = languages.find((l) => l.code === newLang);
        if (selected) {
            setSelectedLanguage(selected);
        }
        persistLanguage(newLang);
        setLangState(newLang);
        i18n.changeLanguage(newLang);

        if (typeof window !== 'undefined') {
            const url = new URL(window.location.href);
            url.searchParams.set('lang', newLang);
            window.history.replaceState({}, '', url.toString());
            document.documentElement.lang = newLang === 'kh' ? 'km' : newLang;
        }
    };

    useEffect(() => {
        const handleCustomEvent = (e) => {
            if (e.detail?.language && e.detail.language !== lang) {
                setLangState(e.detail.language);
                const match = languages.find(l => l.code === e.detail.language);
                if (match) setSelectedLanguage(match);
            }
        };

        window.addEventListener('appLanguageChanged', handleCustomEvent);
        return () => window.removeEventListener('appLanguageChanged', handleCustomEvent);
    }, [lang]);

    return (
        <LanguageContext.Provider value={{ lang, selectedLanguage, setLanguage, languages, t, i18n }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguageContext() {
    return useContext(LanguageContext);
}

export default LanguageContext;
