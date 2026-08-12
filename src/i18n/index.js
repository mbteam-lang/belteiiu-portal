// src/i18n/index.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getLanguage, setLanguage } from '@/services/languageService';

const params = new URLSearchParams(window.location.search);
const urlLang = params.get('lang');
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
            // Priority
            order: [
                'querystring',
                'localStorage',
                'cookie',
                'navigator',
                'htmlTag',
            ],
            lookupQuerystring: 'lang',
            // Save language
            caches: ['localStorage'],
            lookupLocalStorage: 'language',
        },
    });

// Debug (optional)
// i18n.on('languageChanged', (lng) => {
//   console.log('======================');
//   console.log('Language Changed:', lng);
//   console.trace();
// });

export default i18n;