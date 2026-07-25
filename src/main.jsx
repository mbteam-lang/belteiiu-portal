import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './router';
import './index.css';
import './input.css';
import './output.css';
import './i18n';

const RootComponent = () => {
  return (
    <React.StrictMode>
      <React.Suspense >
        <AppRouter />
      </React.Suspense>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<RootComponent />);
