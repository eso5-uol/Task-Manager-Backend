const mongoose = require('mongoose')
const cString = "mongodb+srv://tsamuelfc:Ersi37c4.@nodeexpressproject.2vfdp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const connectDB = (url) => {
  return mongoose.connect(url)
}

module.exports = connectDB;