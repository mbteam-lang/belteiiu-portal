// src/services/apiClient.js

import env from '@/config/env';
import { getLanguage } from './languageService';

const normalizeLanguage = (lang) => {
    if (lang === 'kh') return 'km';
    return lang === 'km' ? 'km' : 'en';
};

export const apiClient = {
    async get(endpoint, params = {}, customHeaders = {}, signal = null) {
        const currentLang = normalizeLanguage(getLanguage() || 'en');
        const queryParams = new URLSearchParams({
            ...params,
            lang: currentLang
        });

        // Filter out undefined/null/empty params
        for (const [key, val] of Object.entries(params)) {
            if (val === undefined || val === null || val === '') {
                queryParams.delete(key);
            }
        }

        const queryString = queryParams.toString();
        const base = env.BASE_URL.replace(/\/+$/, '');
        const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
        const url = `${base}${cleanEndpoint}${queryString ? `?${queryString}` : ''}`;

        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Accept-Language': currentLang,
            ...customHeaders,
        };

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);
        const requestSignal = signal || controller.signal;

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers,
                signal: requestSignal,
            });

            clearTimeout(timeoutId);

            const json = await response.json().catch(() => ({}));

            if (!response.ok) {
                return {
                    success: false,
                    code: json?.code || response.status,
                    status: response.status,
                    message: json?.message || `HTTP Error ${response.status}`,
                    data: null,
                    meta: null,
                };
            }

            return {
                success: true,
                code: json?.code || response.status,
                data: json?.data ?? null,
                meta: json?.meta || null,
                message: json?.message || '',
            };
        } catch (error) {
            clearTimeout(timeoutId);
            if (error.name === 'AbortError') {
                return {
                    success: false,
                    code: 408,
                    status: 408,
                    message: 'Request timed out or cancelled',
                    data: null,
                };
            }
            return {
                success: false,
                code: 500,
                status: 500,
                message: error.message || 'Network error occurred',
                data: null,
            };
        }
    },

    async post(endpoint, body = {}, customHeaders = {}, signal = null) {
        const currentLang = normalizeLanguage(getLanguage() || 'en');
        const base = env.BASE_URL.replace(/\/+$/, '');
        const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
        const url = `${base}${cleanEndpoint}`;

        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Accept-Language': currentLang,
            ...customHeaders,
        };

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);
        const requestSignal = signal || controller.signal;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(body),
                signal: requestSignal,
            });

            clearTimeout(timeoutId);
            const json = await response.json().catch(() => ({}));

            return {
                success: response.ok,
                code: json?.code || response.status,
                data: json?.data ?? null,
                meta: json?.meta || null,
                message: json?.message || '',
            };
        } catch (error) {
            clearTimeout(timeoutId);
            return {
                success: false,
                code: 500,
                status: 500,
                message: error.message || 'Network error occurred',
                data: null,
            };
        }
    }
};

export default apiClient;
