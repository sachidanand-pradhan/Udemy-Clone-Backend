const express = require('express');

const app = express();

app.use(express.json());

app.set("view engine", "ejs");

app.use(express.static("public"));

const course = require("./controllers/course.controller");

app.use("/udemy",course);

module.exports = app;