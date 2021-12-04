const responseCode = require('./responseCode');

module.exports = {

    success: (data = {}) => ({
        headers: data.headers || { 'Content-Type': 'application/json' },
        statusCode: data.statusCode || responseCode.success,
        body: {
            status: 'SUCCESS',
            message: data.message || 'Your request is successfully executed',
            data: data.data || {},
        },
    }),

    failure: (data = {}) => ({
        headers: data.headers || { 'Content-Type': 'application/json' },
        statusCode: data.statusCode || responseCode.internalServerError,
        body: {
            status: 'FAILURE',
            message: data.message || 'Internal server error.',
            data: data.data || {},
        },
    }),

    badRequest: (data = {}) => ({
        headers: data.headers || { 'Content-Type': 'application/json' },
        statusCode: data.statusCode || responseCode.badRequest,
        body: {
            status: 'BAD_REQUEST',
            message: data.message || 'The request cannot be fulfilled due to bad syntax.',
            data: data.data || {},
        },
    }),

    recordNotFound: (data = {}) => ({
        headers: data.headers || { 'Content-Type': 'application/json' },
        statusCode: data.statusCode || responseCode.success,
        body: {
            status: 'RECORD_NOT_FOUND',
            message: data.message || 'Record not found with specified criteria.',
            data: data.data || {},
        },
    }),

    validationError: (data = {}) => ({ //duplicate with invalidRequest;
        headers: data.headers || { 'Content-Type': 'application/json' },
        statusCode: data.statusCode || responseCode.validationError,
        body: {
            status: 'VALIDATION_ERROR',
            message: data.message || `Invalid Data, Validation Failed.`,
            data: data.data || {},
        },
    }),

    unAuthorized: (data = {}) => ({
        headers: data.headers || { 'Content-Type': 'application/json' },
        statusCode: data.statusCode || responseCode.unAuthorized,
        body: {
            status: 'UNAUTHORIZED',
            message: data.message || 'You are not authorized to access the request',
            data: data.data || {},
        },
    }),
};
