const express=require('express');
const {body,validationResult}=require('express-validator');
const router = express.Router();
const user =require("../models/signup.model");
router.post("/",
body("name").isLength({min:1, max:20}).withMessage("Full Name is require"),

body("email").custom(async(value)=>{
    const isEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/.test(value);
    const list=["gmail.com","yahoo.com"];
    const a=value.split("@")
    if(!list.includes(a[1])){
        throw new Error("we do not accept email of this domain");
    }
    if (!isEmail) {
      throw new Error("Please enter a proper email address");
    }
    const productByEmail = await user.findOne({ email: value })
      .lean()
      .exec();
    if (productByEmail) {
      throw new Error("Please try with a different email address");
    }
    return true;
})
,async(req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        let a=errors.array().map(({msg,param,location})=>{
            return {
                [param]:msg,
            }
        })
        return res.status(400).json({errors: a});
    }
    const users= await user.create(req.body);

    return res.status(201).json({users});
})

module.exports = router;