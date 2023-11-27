const mongoose = require('mongoose')    

const registrationSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true, // this ensures that the field cannont be left empty
        trim: true // this removes any spcae or whitespace between characters

    },
    lastname:{
        type: String,
        required: true,
    },
   email:{
    type: String,

   },
   course:{
    type: String,
    required: true,
},


})

module.exports = mongoose.model('register', registrationSchema)