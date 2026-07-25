// src/services/axios.js

import axios from 'axios';
import env from '@/config/env';
import { getLanguage } from './languageService';

const api = axios.create({
    baseURL: env.BASE_URL,
    timeout: 10000,
    headers: { 
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const currentLanguage = getLanguage();

    // ✅ Normalize language codes to what API expects
    const normalize = (lang) => {
        if(lang === 'kh') {
            return lang = 'km'
        } else {
            return lang = 'en'
        }
    };

    const finalLang = normalize(currentLanguage);
    config.headers['Accept-Language'] = finalLang;

    // ✅ Always append the language to the URL query parameters
    config.params = {
        ...config.params,
        lang: finalLang
    };

    return config;
});

export default api;