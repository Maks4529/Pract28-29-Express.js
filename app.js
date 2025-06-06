const express = require('express');
const {taskControllers} = require('./controllers');

const app = express();

app.use(express.json());

app.get('/task', taskControllers.getTask);
app.post('/task', taskControllers.createTask);
app.get('/task/:id', taskControllers.getTaskById);
app.patch('/task/:id', taskControllers.updateTaskById);
app.delete('/task/:id', taskControllers.deleteTaskById);

module.exports = app;