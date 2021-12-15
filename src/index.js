const express = require('express');

const app = express();

app.use(express.json());

app.set("view engine", "ejs");

app.use(express.static("public"));

const author = require("./controllers/author.controller");

app.use("/author",author);

module.exports = app;