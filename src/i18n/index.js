// src/i18n/index.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getLanguage, setLanguage } from '@/services/languageService';

const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
const urlLang = params?.get('lang');
const supported = ['en', 'kh'];

const currentLanguage =
    supported.includes(urlLang)
        ? urlLang
        : getLanguage() || 'en';

// Save only if changed
if (getLanguage() !== currentLanguage) {
    setLanguage(currentLanguage);
}

i18n.use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        lng: currentLanguage,
        supportedLngs: supported,
        debug: false,
        returnObjects: true,
        react: {
            useSuspense: false,
        },
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: [
                'querystring',
                'localStorage',
                'cookie',
                'navigator',
                'htmlTag',
            ],
            lookupQuerystring: 'lang',
            caches: ['localStorage'],
            lookupLocalStorage: 'language',
        },
    });

export default i18n;
