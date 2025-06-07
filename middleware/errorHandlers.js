const { ValidationError } = require('yup');

module.exports.validationErrorHandler = (error, req, res, next) => {
    if(error instanceof ValidationError){
        return res.status(422).send(error.message);
    };
    next(error);
};

module.exports.errorHandler = (error, req, res, next) => {
    if(res.headersSent) {
        return;
    };
    const status = error.status || 500;
    const message = error.message || 'Server Error!';
    res.status(status).send({message});
};