const express = require('express');
const jwt = require('jsonwebtoken');
const signup = require('../models/signup.model');
const router = express.Router();

router.get("", async (req, res) => {
    try {
        return res.render("signup");

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
});

router.post("", async (req, res) => {
    try {

       const registerUser = new signup({
        full_Name : req.body.fullName,
        email : req.body.Email,
     password : req.body.Password
       });

       const token = await registerUser.generateAuthToken();

      const register = await registerUser.save();
      console.log(register);
      
      res.status(201).render("home");
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
});

module.exports = router;