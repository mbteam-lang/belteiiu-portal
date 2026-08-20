// src/App.jsx

import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from '@/context/LanguageContext';
import AppRouter from '@/router/AppRouter';

export default function App() {
    return (
        <LanguageProvider>
            <HelmetProvider>
                <AppRouter />
            </HelmetProvider>
        </LanguageProvider>
    );
}
