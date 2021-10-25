const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');


const getAllTasks = asyncWrapper(async (req, res) => {

    const tasks = await Task.find({})
    res.status(200).json({ tasks });
    // res.status(200).json({ tasks, amount: tasks.length });
    // res
    //     .status(200)
    //     .json({ success: true, data: { tasks, nbHits: tasks.length } });
});

const createTask = asyncWrapper(async (req, res) => {

    const task = await Task.create(req.body);
    res.status(200).json({ task });

});

const getTask = asyncWrapper(async (req, res, next) => {

    const task = await Task.findOne({ _id: req.params.id });
    if (!task) { return next(createCustomError('Task Not Found', 404)); }
    res.status(200).json({ task });

});

const updateTask = asyncWrapper(async (req, res) => {

    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true
    })
    if (!task) { return next(createCustomError('Task Not Found', 404)); }

    res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {

    const task = await Task.findOneAndDelete({ _id: req.params.id });
    if (!task) { return next(createCustomError('Task Not Found', 404)); }

    res.status(200).json({ task });
    // res.status(200).json({ task: null, status: "Deleted Successfully" });
});


const editTask = asyncWrapper(async (req, res) => {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
        overwrite: true
    })

    if (!task) { return next(createCustomError('Task Not Found', 404)); }

    res.status(200).json({ task });
})


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    editTask
}