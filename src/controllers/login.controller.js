const express = require('express');
const bcrypt = require('bcrypt');
const login = require('../models/signup.model');
const router = express.Router();

router.get("", async (req, res) => {
    try {
        return res.render("login");

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
});

router.post("",async(req,res)=>{
    try{
      const email = req.body.Email;
      const password = req.body.Password;
      const useremail = await login.findOne({email:email});
      const isMatch = bcrypt.compare(password, useremail.password);

      const token = await useremail.generateAuthToken();

      res.cookie("jwt", token,{
        expires:new Date(Date.now() + 60000000000000000000),
        httpOnly:true
    });

      if(isMatch){
        
          res.render("home")
      }else{
        res.send("Invalid Login Credential");
      }
    }catch(e){
      res.status(400).send({message:e.message, status:"Invalid Email Id or Password"})
    }
    
    });

module.exports = router;
