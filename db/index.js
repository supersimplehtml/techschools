const mongoose = require("mongoose");
const connectDB = async (req,res) => {
    try {
        await  mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("database connected")
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectDB;