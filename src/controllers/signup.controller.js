const express = require('express');
const Course = require('../models/course.model');
const router = express.Router();

router.get("", async (req, res) => {
    try {
        
        const course = await Course.find().lean().exec()
        return res.render("signup", {
            course,
        });
        
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})