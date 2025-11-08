
const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
        ok: false,
        status: err.statusCode,
        message: err.message,
        stack: err.stack,
        error: err
    })
}

const sendErrorProd = (err, res) => {
    if(err.isOperational) {
        res.status(err.statusCode).json({
            ok: false,
            status: err.statusCode,
            message: err.message
        });
    } else {
        res.status(err.statusCode).json({
            ok: false,
            status: err.statusCode,
            message: "Something went wrong"
        });
    }
}

const validationErrorHandler = (err) => {
    const errors = Object.values(err.errors).map(val => val.message);
    const errorMessages = errors.join('. ');
    return `Invalid input data: ${errorMessages}`;
}


module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    //err.status = err.status || 'error';
    //console.log(err);
    if(err.name === 'ValidationError') {
        err.statusCode = 422;
        err.message = validationErrorHandler(err);
    }
    if(process.env.NODE_ENV === 'development') {
        sendErrorDev(err, res);
    } else {
        sendErrorProd(err, res);
    }
}