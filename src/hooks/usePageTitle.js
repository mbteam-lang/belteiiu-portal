// src/hooks/usePageTitle.js

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function usePageTitle(khTitle = '', enTitle = '', singleTitle = null) {
    const {i18n} = useTranslation();
    useEffect(() => {
        if(singleTitle) {
            document.title = singleTitle;
        } else {
            document.title = i18n.language === 'kh' ? khTitle : enTitle;
        }
    }, [
        i18n.language,
        khTitle,
        enTitle,
        singleTitle
    ]);
}
