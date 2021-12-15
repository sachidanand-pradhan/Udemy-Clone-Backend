const express = require('express');
const Course = require('../models/signup.model');
const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        return res.render("signup");

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})