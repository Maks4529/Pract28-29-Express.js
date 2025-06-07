const { ValidationError } = require('yup');

module.exports.validationErrorHandler = (error, req, res, next) => {
    if(error instanceof ValidationError){
        return res.status(422).send(error.message);
    };
    next(error);
};

module.exports.errorHandler = (error, req, res, next) => {
    res.status(500).send(error.message);
};