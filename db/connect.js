const mongoose = require('mongoose');
const colors = require('colors/safe');

const connectDB = (url) => {
    return mongoose
        .connect(url, {
            useNewUrlParser: true
        })
}

module.exports = connectDB;