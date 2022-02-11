
const express = require('express');
const app = express();
const connectDB = require('./db/connect')

const tasks = require('./routes/tasks')
const notFound = require('./middleware/not-found')
require('dotenv').config();
const errorHandler = require('./middleware/error-handler')
app.use(express.json());
// routes
app.get( '/', (req, res) => {
    res.send('Task Manager App') 
})

app.use('/api/v1/tasks', tasks);
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 3001

const start  = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`server is listening on ${port}`))
    } catch (error) {
        console.log(error)
        
    }
}

start();

