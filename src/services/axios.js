// src/services/axios.js (Bridge adapter to native apiClient)

import apiClient from './apiClient';

const api = {
    get: (url, config = {}) => {
        return apiClient.get(url, config.params, config.headers, config.signal).then(res => ({
            data: res,
            status: res.code || 200,
        }));
    },
    post: (url, data = {}, config = {}) => {
        return apiClient.post(url, data, config.headers, config.signal).then(res => ({
            data: res,
            status: res.code || 200,
        }));
    },
    interceptors: {
        request: { use: () => {} },
        response: { use: () => {} },
    }
};

export default api;
