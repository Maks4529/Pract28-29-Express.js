const createError = require('http-errors');
const {TaskDB} = require('./../models');

module.exports.getTask = (req, res) => {
    const {page, results} = req.query;
    const task = TaskDB.getTask(page, results);
    res.status(200).send(task);
};

module.exports.createTask = (req, res) => {
    const {body} = req;
    const task = TaskDB.createTask(body);
    res.status(201).send(task)
};

module.exports.getTaskById = (req, res, next) => {
    const {id} = req.params;
    const foundTask = TaskDB.getTaskById(id);
    if(foundTask) {
        res.status(200).send(foundTask);
    } else {
        // res.status(404).send('Task Not Found');
        next(createError(404, 'Task Not Found'));
    };
};

module.exports.updateTaskById = (req, res, next) => {
    const {params: {id}, body} = req;
    const updatedTask = TaskDB.updateTaskById(id, body);
    if(updatedTask) {
        res.status(200).send(updatedTask);
    } else {
        // res.status(404).send('Task Not Found');
        next(createError(404, 'Task Not Found'));
    };
};

module.exports.deleteTaskById = (req, res, next) => {
    const {id} = req.params;
    const deleteTask = TaskDB.deleteTaskById(id);
    if(deleteTask) {
        res.status(204).send();
    } else {
        // res.status(404).send('Task Not Found');
        next(createError(404, 'Task Not Found'));
    };
};