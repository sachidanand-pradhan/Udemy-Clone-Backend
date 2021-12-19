const jasonWt = require('jsonwebtoken');
const Register = require("../models/signup.model");

const auth = async (req, res, next) => {
  try {
    console.log("Inside Auth")
    const token = req.cookies.jwt;
    console.log("This is my Token "+token);

    if (!token) {
      return res.redirect('/signup');
    } else {
      console.log("This is token" + token);
      const verifyUser = jasonWt.verify(token, "mynameissurajkarosiafrommasaischool");
      console.log("This is Verify for User " + verifyUser);

      const user = await Register.findOne({ _id: verifyUser._id });
      if (!user) {
        throw new Error()
      }

      req.token = token
      req.user = user
      next()

      req.token = token;
      req.user = user;

      console.log("This is user Data " + user);
      next();
    }
  } catch (e) {
    console.log(e);
  }
};
module.exports = auth;
