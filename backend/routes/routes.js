const express = require('express');
const model  = require('mongoose');
const  User  = require('../models/userModel');
const router = express.Router();
// const  bcrypt = require('bcryptjs')

// get a list of users from the database
//Post Method
router.post('/postuser',  (req, res) => {
  res.send('Post API')
})

// create user

router.post('/postoneuser', async(req, res) => {
  const data = new User({
    name : (req.body.name),
    email : (req.body.email),
    password : (req.body.password),
    isAdmin : (req.body.isAdmin)
    
  })
    try {
      const dataToSave =  await data.save();
      res.status(200).json(dataToSave)

    } catch(error) {

      res.status(400).json({message: error.message})
    }
  })
  
//Get all Method
router.get('/getuser', (req, res) => {
  res.send('Get All API')
})

router.get('/getone', (req, res) =>{
  res.send(req.params.id)
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
  try{
      const data = await User.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = { new: true };

      const result = await User.findByIdAndUpdate(
          id, updatedData, options
      )

      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})


//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const data = await User.findByIdAndDelete(id)
      res.send(`Document with ${data.name} has been deleted..`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})
module.exports = router;