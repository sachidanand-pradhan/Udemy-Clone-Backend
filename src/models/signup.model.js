const mongoose = require("mongoose");


const registrationSchema = new mongoose.Schema(
    {
      full_Name: { type: String},
      email:{ type:String,required:true,unique:true, min:10},
      password:{type:String, required:true, min: 8}
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("Register", registrationSchema);