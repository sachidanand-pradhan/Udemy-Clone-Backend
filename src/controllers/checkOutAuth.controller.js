const express = require('express');
const signup = require('../models/signup.model');
const router = express.Router();

router.get('/checkoutAuth', auth , (req,res)=>{
    res.render('signup');
})
