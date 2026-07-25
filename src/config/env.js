const env = {
    APP_NAME: import.meta.env.VITE_APP_NAME|| 'BELTEI PORTAL',
    BASE_URL: import.meta.env.VITE_BASE_URL || '', 
    APP_VERSION: import.meta.env.VITE_APP_VERSION || '1.0.0',

    MODE: import.meta.env.MODE,
    DEV: import.meta.env.DEV,
    PROD: import.meta.env.PROD,
};

export default Object.freeze(env);