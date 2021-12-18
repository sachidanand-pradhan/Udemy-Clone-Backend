const express = require("express");
const signup = require("../models/signup.model");
const router = express.Router();
const jwt = require("jsonwebtoken");
const cookie = require("cookie");

const Author = require("../models/course.model");

router.get("", async (req, res) => {
  try {
    const author = Author.find().lean().exec();
    const cookie = req.cookies.jwt;
    return res.render("signup", { author, cookie });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.post("", async (req, res) => {
  try {
    let token;
    const registerUser = new signup({
      full_Name: req.body.fullName,
      email: req.body.Email,
      password: req.body.Password,
    });

    const checkUser = await signup.findOne({ email: email }).lean().exec();
    if (checkUser) {
        console.log("You are already a user");
      alert("You are already a user");
    } else {
      token = await registerUser.generateAuthToken();
      console.log("Token is being generated");

      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 6000000000000000000),
        httpOnly: true,
      });
      console.log(cookie);

      const register = await registerUser.save();
      console.log(register);

      return res.redirect("/home");
    }
  } catch (e) {
    return res
      .status(500)
      .json({
        message: e.message,
        status: "error is in this particular block",
      });
  }
});

router.get("/:token", async (req, res) => {
  try {
    const user = await signup
      .find({ tokens: { $elemMatch: { token: req.params.token } } })
      .lean()
      .exec();
    res.status(200).send(user);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
