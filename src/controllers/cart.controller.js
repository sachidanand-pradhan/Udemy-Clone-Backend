const express = require('express');

const router = express.Router();

const Author = require('../models/course.model');



router.get("/", async function (req, res) {
    try {
        const author = await Author.find().lean().exec();

        return res.render("cart", { author });

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "failed at cart.controller" })
    }
})


module.exports = router;