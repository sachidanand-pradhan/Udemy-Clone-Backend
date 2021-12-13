const express = require('express');

const app = express();

app.use(express.json());

const author = require("./controllers/author.controller");

app.use("/author",author);

module.exports = app;