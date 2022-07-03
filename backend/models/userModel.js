const mongoose = require("mongoose");
// const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    userImage: { type: String, required: true },
    password: { type: String, required: true },
  },

  {
    timestamps:  true,
  }
  
)

// userSchema.methods.matchPassword = async function (enterdPassword) {
//   return await bcrypt.compare(enterdPassword, this.password)
// }

// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     next()
//   }
// })

//   const salt = await bcrypt.genSalt(10)
//   this.password = await bcrypt.hash(this.password, salt)


const User = mongoose.model('User', userSchema)

module.exports = User