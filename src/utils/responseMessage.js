// src/utils/responseMessage.js

const responseMessage = {
    success: {
        created: 'Created successfully.',
        updated: 'Updated successfully.',
        deleted: 'Deleted successfully.',
        fetched: 'Data loaded successfully.',
    },

    error: {
        noData: 'No data available.',
        notFound: 'Data not found.',
        unauthorized:
            'Unauthorized access.',
        forbidden:
            'Permission denied.',
        serverError:
            'Internal server error.',
        networkError:
            'Network connection error.',
        timeout:
            'Request timeout.',
        somethingWrong:
            'Something went wrong.',
    },

    statusCode: {
        400: 'Bad request.',
        401: 'Unauthorized.',
        403: 'Forbidden.',
        404: 'Resource not found.',
        422: 'Validation failed.',
        429: 'Too many requests.',
        500: 'Internal server error.',
        502: 'Bad gateway.',
        503: 'Service unavailable.',
    },
};

export default Object.freeze(responseMessage);