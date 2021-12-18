const express = require('express');
const router = express.Router();
const Author = require('../models/course.model');

router.get("", async (req, res) => {
    try {
        const author = await Author.find().lean().exec();
        const cookie = req.cookies.jwt;
        return res.render("desc", { cookie, author});

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
});

module.exports = router; 