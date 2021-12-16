const express = require('express');

const router = express.Router();



router.get("/", async function (req, res) {
    try {
        res.render("cart")
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})
module.exports = router;