const express = require('express');
const app = express();
const colors = require('colors');

const tasks = require('./routes/task');
const connectDB = require('./db/connect');
require('dotenv').config();

// middleware
app.use(express.static('./public'));
app.use(express.json());
const notFound = require('./middleware/404');
const errorHandlerMiddleware = require('./middleware/error-handler');

// routes
app.use('/api/v1/tasks', tasks)

app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => console.log(colors.rainbow(`Server running on ${PORT}`)));
    } catch (error) {
        console.log(error);
    }
}

start();
