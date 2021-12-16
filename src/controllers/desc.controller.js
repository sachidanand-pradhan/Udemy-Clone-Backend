const express = require('express');
const router = express.Router();

router.get("", async (req, res) => {
    try {
        return res.render("desc");

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
});

module.exports = router;