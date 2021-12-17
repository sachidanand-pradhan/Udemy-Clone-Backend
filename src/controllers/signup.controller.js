const express = require('express');
const signup = require('../models/signup.model');
const router = express.Router();
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

const Author = require('../models/course.model')

router.get("", async (req, res) => {
    try {
        const author = Author.find().lean().exec();
        return res.render("signup", { author });

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
});


router.post("", async (req, res) => {
    try {
        let token;
       const registerUser = new signup({
        full_Name : req.body.fullName,
        email : req.body.Email,
     password : req.body.Password
       });

       token = await registerUser.generateAuthToken();
       console.log("Token is being generated");
       
       res.cookie("jwt", token,{
           expires:new Date(Date.now() + 6000000000000000),
           httpOnly:true
       });
       console.log(cookie);

      const register = await registerUser.save();
      console.log(register);

      return res.redirect("udemy/home");

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "error is in this particular block" })
    }
});

module.exports = router;