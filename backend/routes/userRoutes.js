// const express = require("express");
// const router = express.Router();
// const mongoose = require("mongoose");
// const multer = require('multer');

// const storage = multer.diskStorage({

// //   destination: function(req, file, cb) {
// //     console.log(file)
// //     cb(null, './uploads/');

// //   },

// //   filename: function(req, file, cb) {
// //     cb(null, new Date().toISOString() + file.originalname);
// //   },

// // });

// // const fileFilter = (req, file, cb) => {
// //   // reject a file
// //   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
// //     cb(null, true);
// //   } else {
// //     cb(null, false);
// //   }
// // };

// // const upload = multer({
// //   storage: storage,
// //   limits: {
// //     fileSize: 1024 * 1024 * 5
// //   },
// //   fileFilter: fileFilter
// // });

// // const User = require("../models/userModel");

// // router.get("/", (req, res, next) => {
// //     console.log(req.file)
// //     User.find()
// //     .select("name email password _id userImage")
// //     .exec()
// //     .then(docs => {
// //       const response = {
// //         count: docs.length,
// //         User: docs.map(doc => {
// //           return {

// //             request: {
// //               type: "GET",
// //               url: "http://localhost:3000/users/" + doc._id
// //             }
// //           };
// //         })
// //       };
// //         // if (docs.length >= 0) {
// //       res.status(200).json(response);
// //         // } else {
// //             // res.status(404).json({
// //             //     message: 'No entries found'
// //             // });
// //         // }
// //     })
// //     .catch(err => {
// //       console.log(err);
// //       res.status(500).json({
// //         error: err
// //       });
// //     });
// //   });
  
// //   router.post("/", upload.single('userImage'), (req, res, next) => {
// //   console.log(file)

// //   const user = new User({
// //     _id: new mongoose.Types.ObjectId(),
// //     name: req.body.name,
// //     email: req.body.email,
// //     password: req.body.password,
// //     userImage: req.file.path, 

// //   });

// //   user
// //     .save()
// //     .then(result => {
// //       console.log(result);
// //       res.status(201).json({
// //         message: "Created user successfully",
// //         createdUsers: {
// //             name: result.name ,
// //             email: result.email,
// //             password: result.password,
// //             userImage: result.userImage,
// //             _id: result._id,
// //             request: {
// //                 type: 'POST',
// //                 url: "http://localhost:3000/users/" + result._id
// //             }
// //         }
// //       });
// //     })
// //     .catch(err => {
// //       console.log(err);
// //       res.status(500).json({
// //         error: err
// //       });
// //     });
// //     // next()
// // });

// // router.get("/:userId", (req, res, next) => {
// //   const id = req.params.userId;
// //   User.findById(id)
// //     .select('name email password  _id userImage')
// //     .exec()
// //     .then(doc => {
// //       console.log("From database", doc);
// //       if (doc) {
// //         res.status(200).json({
// //             User: doc,
// //             request: {
// //                 type: 'GET',
// //                 url: 'http://localhost:3000/users'
// //             }
// //         });
// //       } else {
// //         res
// //           .status(404)
// //           .json({ message: "No valid entry found for provided ID" });
// //       }
// //     })
// //     .catch(err => {
// //       console.log(err);
// //       res.status(500).json({ error: err });
// //     });
// // });

// // router.patch("/:userId", (req, res, next) => {
// //   const id = req.params.userId;
// //   const updateOps = {};
// //   for (const ops of req.body) {
// //     updateOps[ops.propName] = ops.value;
// //   }
// //   User.update({ _id: id }, { $set: updateOps })
// //     .exec()
// //     .then(result => {
// //       res.status(200).json({
// //           message: 'user updated',
// //           request: {
// //               type: 'GET',
// //               url: 'http://localhost:3000/products/' + id
// //           }
// //       });
// //     })
// //     .catch(err => {
// //       console.log(err);
// //       res.status(500).json({
// //         error: err
// //       });
// //     });
// // });

// // router.delete("/:userId", (req, res, next) => {
// //   const id = req.params.userId;
// //   User.remove({ _id: id })
// //     .exec()
// //     .then(result => {
// //       res.status(200).json({
// //           message: 'user deleted',
// //           request: {
// //               type: 'DELETE',
// //               url: 'http://localhost:3000/users',
// //               body: { name: 'String', email: 'String' }
// //           }
// //       });
// //     })
// //     .catch(err => {
// //       console.log(err);
// //       res.status(500).json({
// //         error: err
// //       });
// //     });
// // });

// module.exports = router;






















const express = require("express");
const app = express();
app.use(express.json())
const router = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');


// const storage = multer.diskStorage({

//     destination: function(req, fileName, cb) {
//       cb(null, './uploads/');
//       console.log(fileName)

  
//     },
  
  //   fileName: function(req, fileName, cb) {
  //     console.log(req.fileName)
  //     cb(null, new Date().toISOString() + fileName.originalname);
  //   },
  
  // });
  
  // const fileFilter = (req, fileName, cb) => {
  //   // reject a file
  //   if (fileName.mimetype === 'image/jpeg' || fileName.mimetype === 'image/png') {
  //     cb(null, true);
  //   } else {
  //     cb(null, false);
  //   }
  // };
  
  // const upload = multer({
  //   storage: storage,
  //   limits: {
  //     fileSize: 1024 * 1024 * 5
  //   },
  //   fileFilter: fileFilter
  // });
  
 
  

  router.get("/", async(req, res, next) => {
    console.log(req.file)
    try{
      const getAllData = await User.find();
      res.status(200).json(getAllData)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
  })
  

// // create user
const User = require("../models/userModel");


router.post('/', async(req, res) => {

  try {

    const user = new User({
          _id: new mongoose.Types.ObjectId(),
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          file: req.file.name
         
    })
    const file = req.files.file
    const fileName = file.name;
    const size = file.data.length;
    const extension = path.extname(fileName);
    const allowedExtensions = /png|jpeg|jpg|gif/;
  
    if(!allowedExtensions.test(extension)) throw "Unsupported extension!";
    if(size > 5000000) throw "file must be less than 5 MB"
    console.log(req.fileName)

    const md5 = file.md5;
    const URL = '/uploads'  + md5 + extension;
    await util.promisify(file.mv)('./public' + URL);

    res.json({
      message: "file Uploaded!!"
    })
  
  
} catch(error) {
    console.log(error)
    res.status(500).json({
      message: error
    })
  }
})


  
  
//Get all Method
// router.get('/', (req, res) => {
//   res.send('Get All API')
// })




    // .select("name email password _id userImage")
    // .exec()
    // .then(docs => {
    //   const response = {
    //     count: docs.length,
    //     users: docs.map(doc => {
    //       return {
    //         name: doc.name,
    //         email: doc.email,
    //         userImage: doc.userImage,
    //         _id: doc._id,
    //         request: {
    //           type: "GET",
    //           url: "http://localhost:3000/users/" + doc._id
    //         }
    //       };
    //     })
    //   };




//Get by ID Methodb
router.get('/getOne/:id', async (req, res) => {
  try{
      const getByID = await User.findById(req.body);
      res.json(getByID)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
  try {
      const id = req.body.id;
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
      const id = req.body.id;
      const data = await User.findByIdAndDelete(id)
      res.send(`Document with ${data.name} has been deleted..`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})

module.exports = router;