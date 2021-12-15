const express = require('express');

const app = express();
const { validator } = require('express-fastest-validator');

app.use(express.json());

app.set("view engine", "ejs");

app.use(express.static("public"));

const course = require("./controllers/course.controller");
//const sign = require('./controllers/signup.controller');
const userController= require('./controllers/user.controller')

app.use("/users",userController);


app.use("/udemy",course);
//app.use("/signup",sign);

module.exports = app;