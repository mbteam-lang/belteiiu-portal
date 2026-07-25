// src/utils/getResponseMessage.js

import responseMessage from './responseMessage';

/**
 * Get response message
 *
 * @param {Object} options
 * @param {Object} options.response
 * @param {String} options.type
 * @param {String} options.key
 *
 * @returns {String}
 */

export const getResponseMessage = ({ response = null, type = 'error', key = 'somethingWrong' } = {}) => {
    // API custom message
    if (response?.message) {
        return response.message;
    }

    // API status code
    if (response?.code) {
        return (responseMessage.statusCode[response.code] || responseMessage.error.somethingWrong);
    }

    // local fallback
    return (
        responseMessage[type]?.[key] ||
        responseMessage.error.somethingWrong
    );
};

export const getStatusMessage = (status) => {
    return (
        responseMessage.statusCode[status] || responseMessage.error.somethingWrong
    );
};