const express = require('express');

const login = require('../models/signup.model');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth , async (req, res)=>{
    try{
        console.log("Logout succesfully");
        res.clearCookie('jwt');
        res.redirect("/");
    }
    catch(e){
        res.status(500).send({message:e.message, staus:"Logout Error"});
    }
})


module.exports = router;