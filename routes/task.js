const express = require('express');
const router = express.Router();

const { getAllTasks, createTask, getTask, updateTask, deleteTask, editTask } = require('../controllers/task');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).delete(deleteTask).put(editTask);

// router.route('/:id').patch(updateTask);

module.exports = router;