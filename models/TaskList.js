const {v4: uuidv4} = require('uuid');

const taskDB = [
    {
        id: '1',
        message: "Task1",
        isDone: false,
    },
    {
        id: '2',
        message: "Task2",
        isDone: false,
    },
];

class TaskDB {
    constructor(arr) {
        this.task = [...arr];
    };

    getTask() {
        return [...this.task];
    };

    createTask(newTask) {
        this.task.push({...newTask, id: uuidv4(), isDone: false});
        return this.task[this.task.length - 1];
    };

    getTaskById(id) {
        const foundIndex = this.task.findIndex(c => c.id === id);
        return foundIndex === -1 ? null: this.task[foundIndex];
    };

    updateTaskById(id, values) {
        const foundTaskIndex = this.task.findIndex(c => c.id === id);
        if (foundTaskIndex !== -1) {
            this.task[foundTaskIndex] = {
                ...this.task[foundTaskIndex],
                ...values,
            };
        };
    };

    deleteTaskById(id) {
        const foundTaskIndex = this.task.findIndex(c => c.id === id);
        return foundTaskIndex === -1 ? null: this.task.splice(foundTaskIndex, 1);
    };
};

const taskDBinstance = new TaskDB(taskDB);

module.exports = taskDBinstance;