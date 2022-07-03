const express = require("express");
const app = express();
 const connectDB = require("./backend/config/db")
 const dotenv = require("dotenv")
 const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const userRoutes = require("./backend/routes/userRoutes");
app.use(express.json());

 dotenv.config()

 connectDB()

 mongoose.Promise = global.Promise;

 app.use(morgan("dev"));
 app.use('/uploads', express.static('./utils/uploads'));
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());
 
 app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header(
     "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
   );
   if (req.method === "OPTIONS") {
     res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
     return res.status(200).json({});
   }
   next();
 });
 


// Middleware || all our endpoints will start from '/users'.
app.use("/users", userRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});


app.listen(3000, ()=>{
  console.log('Server Running')
});


