// src/hooks/useLanguage.js

import { useLanguageContext } from '@/context/LanguageContext';

export function useLanguage() {
    const context = useLanguageContext();
    if (!context) {
        // Fallback for standalone usage
        return {
            lang: 'en',
            language: 'en',
            selectedLanguage: null,
            setLanguage: () => {},
            languages: [],
            t: (k) => k,
        };
    }
    return {
        ...context,
        language: context.lang,
    };
}

export default useLanguage;
