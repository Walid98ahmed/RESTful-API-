const express = require("express");
const app = express();
 const connectDB = require("./backend/config/db")
 const dotenv = require("dotenv")

const routes = require("./backend/routes/routes");
app.use(express.json());

 dotenv.config()

 connectDB()

// Middleware || all our endpoints will start from '/api'.
app.use("/api", routes);


app.listen(3000, ()=>{
  console.log('Server Running')
});


