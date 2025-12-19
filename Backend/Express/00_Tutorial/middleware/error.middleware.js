const errorHandler = (err, req, res, next) => {
    // If the status code is 200 (default), set it to 500 (Server Error)
    // Otherwise, keep the existing error status (e.g., 400 or 404)
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    res.status(statusCode);

    res.json({
        message: err.message,
        // Only show the detailed stack trace if we are in development mode
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

module.exports = { errorHandler };