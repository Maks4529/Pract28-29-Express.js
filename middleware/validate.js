const { CREATE_TASK_VALIDATION_SCEMAS, UPDATE_TASK_VALIDATION_SCEMAS } = require("../utils/validationSchemas");

module.exports.validateOnCreate = async (req, res, next) => {
    const {body} = req;
    try {
        const validatedTask = await CREATE_TASK_VALIDATION_SCEMAS.validate(body);
        req.body = validatedTask;
        next();
    } catch (error) {
        // res.status(422).send(error.message);
        next(error);
    };
};

module.exports.validateOnUpdate = async (req, res, next) => {
    const {body} = req;
    try {
        const validatedTask = await UPDATE_TASK_VALIDATION_SCEMAS .validate(body);
        req.body = validatedTask;
        next();
    } catch (error) {
        // res.status(422).send(error.message);
        next(error);
    };
};