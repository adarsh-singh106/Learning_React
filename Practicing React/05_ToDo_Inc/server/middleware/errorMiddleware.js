const errorHandler = (err, req, res, next) => {
  // If the status code is 200 (default), change it to 500 (Server Error)
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    // Only show stack trace in development mode (not production)
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = { errorHandler };