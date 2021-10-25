const mongoose = require('mongoose');
const timeStamp = new Date().toLocaleTimeString();

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter Description'],
        trim: true,
        maxlength: [25, "Over Word Limit!"]
    },
    completed: {
        type: Boolean,
        default: false
    },
    updatedAt: {
        type: String,
        default: timeStamp
    }
});

module.exports = mongoose.model('Task', TaskSchema);