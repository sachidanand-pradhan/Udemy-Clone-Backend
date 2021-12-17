const express = require('express');
const signup = require('../models/signup.model');
const router = express.Router();
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

const Author = require('../models/course.model')

router.get("", async (req, res) => {
    try {
        return res.render("signup");

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

       res.cookie("jwt", token,{
           expires:new Date(Date.now() + 6000000000000000),
           httpOnly:true
       });
       console.log(cookie);

      const register = await registerUser.save();
      console.log(register);
      
      const author = await Author.find().lean().exec();

      return res.render("home", { author
      });
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "JWT Auth" })
    }
});

module.exports = router;