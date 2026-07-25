// src/hooks/usePageTitle.js

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function usePageTitle(khTitle = '', enTitle = '') {
    const {i18n} = useTranslation();
    useEffect(() => {
        document.title = i18n.language === 'kh' ? khTitle : enTitle;

    }, [
        i18n.language,
        khTitle,
        enTitle,
    ]);
}