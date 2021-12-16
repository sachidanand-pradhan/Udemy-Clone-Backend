const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const validator = require('validator');
const jwt = require('jsonwebtoken');


const registrationSchema = new mongoose.Schema(
    {
      full_Name: { type: String},
      email:{ type:String,
        required:true,
        unique:true,
        validate(value){
          if(!validator.isEmail(value)){
            throw new Error("Email is Invalid")
          }
        } 
      },
      password:{type:String, required:true, min: 8},
      tokens:[{
        token:{
          type:String,
          required:true
        }
      }]
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );

  //Generating token
  registrationSchema.methods.generateAuthToken = async function(){
    try{
        const token = jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token})
        await this.save();
        console.log("This is Your Token "+token);
        return token;
    }catch(e){
      res.send("This is your error "+e);
    }
  }

// Password hashing
  registrationSchema.pre("save",async function(next){
    this.password = await bcrypt.hash(this.password,10)
    next();
  })
  
  module.exports = mongoose.model("Register", registrationSchema);