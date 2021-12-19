const express = require('express');
const router = express.Router();
const Author = require('../models/course.model');

router.get("", async (req, res) => {
    try {
        const cookie = req.cookies.jwt;
        return res.render("desc", {cookie});
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "failed at desc controller" })
    }
});

module.exports = router; 