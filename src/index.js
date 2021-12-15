const express = require('express');

const app = express();
const { validator } = require('express-fastest-validator');

app.use(express.json());

app.set("view engine", "ejs");

app.use(express.static("public"));

const course = require("./controllers/course.controller");
const sign = require('./controllers/signup.controller');
const login = require('./controllers/login.controller');



app.use("/udemy",course);
app.use('/udemy/signup',sign);
app.use('/udemy/login',login);



module.exports = app;