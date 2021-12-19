const express = require('express');
const router = express.Router();
const Author = require('../models/course.model');



router.get("/", async function (req, res) {
    try {
        const author = await Author.find().lean().exec();
        const cookie = req.cookies.jwt;
        return res.render("learning", { author, cookie });

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "failed at cart.controller" })
    }
});

router.get("/desc/:id", async function (req, res) {
  const author = await Author.findById(req.params.id).lean().exec();
  const cookie = req.cookies.jwt;
  return res.render("desc", {
    author,
    cookie,
  });
});
router.get("/search/desc/:id", async function (req, res) {
  const author = await Author.findById(req.params.id).lean().exec();
  const cookie = req.cookies.jwt;
  return res.render("desc", {
    author,
    cookie,
  });
});


module.exports = router;