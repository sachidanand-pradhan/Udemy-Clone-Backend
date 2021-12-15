const mongoose = require("mongoose");


const registrationSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      email:{ type:String,required:true,unique:true},
      password:{type:String, required:true},
      checkBox:{type: Boolean,required:true}
     
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("registration", registrationSchema);