const express = require("express");
const app = express();
app.use(express.json())
const morgan = require("morgan");
const connectDB = require('./backend/config/db')
const dotenv = require('dotenv')
const util = require('util')
const path = require('path')
const fileUpload = require('express-fileupload')

const userRoutes = require("./backend/routes/userRoutes");
// const orderRoutes = require("./api/routes/orders");

dotenv.config()

connectDB()

// app.use('/uploads', express.static('uploads'));
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(fileUpload())

  
// Routes which should handle requests
app.use("/users", userRoutes);
// app.use("/orders", orderRoutes);

app.use((req, res, next) => {
  if(req.file) {
    // return res.status(201).json({req.body});
    res.status(201).json({
      message: "Created user successfully",
      })
      next()
  }
  const error = new Error("Not userdata found");
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

const http = require('http');
const server = http.createServer(app);

server.listen(3000, () => console.log('Server Running on port 3000'));



