const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/[proshop]", {
            useUnifiedTopology : true,
            useNewUrlParser: true,
            // useCreateIndex: true,
        })

        console.log(`Mongo connected: ${conn.connection.host}`)

    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
        
    }
}

module.exports = connectDB