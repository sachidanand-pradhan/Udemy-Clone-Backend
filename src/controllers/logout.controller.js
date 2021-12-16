const express = require('express');

const login = require('../models/signup.model');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('', auth , async (req,res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((el)=>{
            return el.token !== req.token;
        })

        res.clearCookie('jwt');
        console.log("Logout succesfully");
        await req.user.save();
        res.render('login');
    }
    catch(e){
        res.status(500).send({message:e.message, staus:"Failed"});
    }
})


module.exports = router;