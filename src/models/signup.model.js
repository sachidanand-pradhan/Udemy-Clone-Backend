const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const { validator } = require('express-fastest-validator');


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

  registrationSchema.pre("save",async function(next){
    this.password = await bcrypt.hash(this.password,10)
    next();
  })
  
  module.exports = mongoose.model("Register", registrationSchema);