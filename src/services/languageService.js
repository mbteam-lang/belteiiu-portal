// src/services/languageService.js

const LANGUAGE_KEY = 'language';

export const setLanguage = (language) => {
    localStorage.setItem(LANGUAGE_KEY, language);
    return language;
};

export const getLanguage = () => {
    const language = localStorage.getItem(LANGUAGE_KEY);
    return language;
};