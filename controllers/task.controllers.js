const {TaskDB} = require('./../models');

module.exports.getTask = (req, res) => {
    const task = TaskDB.getTask();
    res.status(200).send(task);
};

module.exports.createTask = (req, res) => {
    const {body} = req;
    const task = TaskDB.createTask(body);
    res.status(201).send(task)
};

module.exports.getTaskById = (req, res) => {
    const {id} = req.params;
    const foundTask = TaskDB.getTaskById(id);
    if(foundTask) {
        res.status(200).send(foundTask);
    } else {
        res.status(404).send('Task Not Found');
    }
};

module.exports.updateTaskById = (req, res) => {
    const {params: {id}, body} = req;
    const updatedTask = TaskDB.updateTaskById(id, body);
    if(updatedTask) {
        res.status(200).send(updatedTask);
    } else {
        res.status(404).send('Task Not Found');
    };
};

module.exports.deleteTaskById = (req, res) => {
    const {id} = req.params;
    const deleteTask = TaskDB.deleteTaskById(id);
    if(deleteTask) {
        res.status(204).send();
    } else {
        res.status(404).send('Task Not Found');
    };
};