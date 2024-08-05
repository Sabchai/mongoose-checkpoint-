const mongoose= require("mongoose")

const ContactShema= mongoose.Schema({
   name: String,
  email: {
    type: String,
    required: true, 
    unique: true
}, 
age: Number
})
module.exports= mongoose.model("contactsSabiEya", ContactShema)