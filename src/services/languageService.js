// src/services/languageService.js

const LANGUAGE_KEY = 'language';

export const setLanguage = (language) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(LANGUAGE_KEY, language);
        window.dispatchEvent(new CustomEvent('appLanguageChanged', { detail: { language } }));
    }
    return language;
};

export const getLanguage = () => {
    if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const urlLang = params.get('lang');
        if (urlLang && ['en', 'kh', 'km'].includes(urlLang)) {
            return urlLang === 'km' ? 'kh' : urlLang;
        }
        const stored = localStorage.getItem(LANGUAGE_KEY);
        if (stored) return stored;
    }
    return 'en';
};

export default { setLanguage, getLanguage };
