const express = require('express');
const {validate, errorHandlers} = require('./middleware');
const {taskControllers} = require('./controllers');

const app = express();

app.use(express.json());

app.get('/task', taskControllers.getTask);
app.post('/task', validate.validateOnCreate, taskControllers.createTask);
app.get('/task/:id', taskControllers.getTaskById);
app.patch('/task/:id', validate.validateOnUpdate, taskControllers.updateTaskById);
app.delete('/task/:id', taskControllers.deleteTaskById);

app.use(
    errorHandlers.validationErrorHandler,
    errorHandlers.errorHandler,
);

module.exports = app;