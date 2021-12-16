const jwt = require('jsonwebtoken');
const Register = require('../models/signup.model');

const auth = async(res,req,next)=>{

    try{

        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
        console.log("This is Verify for User "+verifyUser);

        const user = await Register.findOne({_id:verifyUser._id});

        req.token = token;
        req.user = user;

        console.log("This is user Data "+user);
        next();
    }
    catch(e){
        res.status(500).send({message:e.message, status:"Failed"})
    }
}
module.exports = auth;