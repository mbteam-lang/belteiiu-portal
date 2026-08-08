// src/utils/themeService.js

const THEME_KEY = 'theme';

export const getTheme = () => {
    if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const urlTheme = params.get('theme');
        if (urlTheme && ['light', 'dark'].includes(urlTheme)) {
            return urlTheme;
        }
    }
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
        return savedTheme;
    }
    // Default to light mode
    return 'light';
};

export const setTheme = (theme) => {
    const targetTheme = theme === 'dark' ? 'dark' : 'light';
    localStorage.setItem(THEME_KEY, targetTheme);

    const root = document.documentElement;
    if (targetTheme === 'dark') {
        root.classList.add('dark');
        document.body.classList.add('dark');
    } else {
        root.classList.remove('dark');
        document.body.classList.remove('dark');
    }

    // Update URL query parameter 'theme' if needed
    if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        if (url.searchParams.get('theme') !== targetTheme) {
            url.searchParams.set('theme', targetTheme);
            window.history.replaceState({}, '', url.toString());
        }
    }

    // Broadcast theme change event for reactive components or webviews
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: targetTheme } }));
    return targetTheme;
};

export const toggleTheme = () => {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    return setTheme(newTheme);
};

// Global Mobile Interoperability Bridge & Initializer
if (typeof window !== 'undefined') {
    window.setAppTheme = (theme) => setTheme(theme);
    window.toggleAppTheme = () => toggleTheme();
    window.getAppTheme = () => getTheme();

    // Auto-apply initial theme on script load
    setTheme(getTheme());
}
