const express = require('express');
const bcrypt = require('bcrypt');
const login = require('../models/signup.model');
const router = express.Router();

const Author = require('../models/course.model')

router.get("", async (req, res) => {
    try {
      const author = Author.find().lean().exec();
      return res.render("login", { author });
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

      let newCookie = res.cookie("jwt", token,{
        expires:new Date(Date.now() + 60000000000000000000),
        httpOnly:false
    });

      if(isMatch){
          // const author = Author.find().lean().exec();
          alert("cookie should have been generate")
          res.redirect("/home")
      }else{
        res.send("Invalid Login Credential");
      }
    }catch(e){
      res.status(400).send({message:e.message, status:"Invalid Email Id or Password"})
    }
    
    });

    
router.get("/cookie", async (req, res) => {
  try {
      let rc = req;

      res.status(200).send(rc);
  } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" })
  }
});

module.exports = router;
