const { customAPIError } = require('../errors/custom-error');


const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof customAPIError) {
        return res.status(err.statusCode).json({ msg: err.message });
    }
    res.status(500).json({ msg: 'Something broke!' });
};

module.exports = errorHandlerMiddleware;