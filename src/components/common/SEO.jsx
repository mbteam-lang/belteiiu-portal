// src/components/common/SEO.jsx

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/hooks/useLanguage';

export default function SEO({
    titleKh,
    titleEn,
    title,
    descriptionKh,
    descriptionEn,
    description,
    image = '/favicon.ico',
}) {
    const { lang } = useLanguage();

    const isKh = lang === 'kh' || lang === 'km';
    const siteTitle = isKh ? 'សាកលវិទ្យាល័យប៊ែលធី អន្តរជាតិ' : 'BELTEI International University';
    
    let computedTitle = title;
    if (!computedTitle) {
        computedTitle = isKh ? (titleKh || siteTitle) : (titleEn || siteTitle);
    }
    
    const fullTitle = computedTitle === siteTitle ? siteTitle : `${computedTitle} | ${siteTitle}`;
    
    let computedDesc = description;
    if (!computedDesc) {
        computedDesc = isKh
            ? (descriptionKh || 'គេហទំព័រព័ត៌មាន និងសេវាកម្មផ្លូវការរបស់សាកលវិទ្យាល័យប៊ែលធី អន្តរជាតិ')
            : (descriptionEn || 'Official portal of BELTEI International University. Explore programs, degrees, and academic resources.');
    }

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={computedDesc} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={computedDesc} />
            <meta property="og:image" content={image} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={computedDesc} />
        </Helmet>
    );
}
