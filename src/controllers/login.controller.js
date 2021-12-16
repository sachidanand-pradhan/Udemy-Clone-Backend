const express = require('express');
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
      if(useremail.password===password){
        
          res.render("home")
      }else{
        res.send("Invalid Login Details Kindly Go Back");
      }
    }catch(error){
      res.status(400).send("error")
    }
    
    });

module.exports = router;
