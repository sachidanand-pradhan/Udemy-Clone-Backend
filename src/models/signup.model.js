const mongoose = require("mongoose");


const registrationSchema = new mongoose.Schema(
    {
      full_Name: { type: String, required: true },
      email:{ type:String,required:true,unique:true},
      password:{type:String, required:true}
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("Register", registrationSchema);