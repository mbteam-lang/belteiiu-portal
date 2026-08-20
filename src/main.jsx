// src/main.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@/utils/themeService';
import './index.css';
import './i18n';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
