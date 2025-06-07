const yup = require('yup');

module.exports.CREATE_TASK_VALIDATION_SCEMAS = yup.object({
    message: yup
    .string()
    .min(1)
    .max(150)
    .required(),
});

module.exports.UPDATE_TASK_VALIDATION_SCEMAS = yup.object({
    message: yup
    .string()
    .min(1)
    .max(150),
    isDone: yup.boolean(),
});
