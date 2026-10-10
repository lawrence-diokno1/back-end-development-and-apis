export const notFoundHandler = (req, res, next) => {
    const err = new Error(`Error: ${req.originalUrl}`);
    err.status = 404;
    next(err);
}

export const finalErrorHandler = (err, req, res, next) => {
    const status = err.status || 500;

    console.error(err);

    res.status(status).json({
        error: true,
        status: status,
        message: status === 500
            ? "Internal Server Error (Check Server Logs)"
            : err.message
    });
};
