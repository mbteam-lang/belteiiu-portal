import api from './axios';

export const getService = async (endpoint, params = {}) => {
    try {
        const response = await api.get(endpoint, {
            params,
        });
        return {
            success: true,
            code: response.data?.code,
            data: response.data?.data ?? null,
            meta: response.data?.meta || null,
            message: response.data?.message || '',
        };
    } catch (error) {
        return {
            success: false,
            code: error.response?.data?.code,
            status: error.response?.data?.status,
            message: error.response?.data?.message,
        };
    }
};