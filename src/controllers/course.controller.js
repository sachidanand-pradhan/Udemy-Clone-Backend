const express = require('express');
const Author = require('../models/course.model');

const router = express.Router();

router.post('', async function (req, res) {
    try {
        const author = await Author.create(req.body);
        return res.status(200).send(author);
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
});

router.get("/courses", async function (req, res) {
    try {
        const author = await Author.find().lean().exec()
        res.status(201).send({author})
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})

router.get('/restaurants/search', async (req, res) => {
    const { resName } = req.query;
    const restaurants = await Author.find({ $text: { $search: { name: resName } } });
    console.log(restaurants);
    res.render('courses', { restaurants });
})

router.get("/", async (req, res) => {
    try {

        const author = await Author.find().lean().exec()
        return res.render("home", {
            author,
        });

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})

router.get("/search", async (req, res) => {
    try {

        const author = await Author.find().lean().exec()
        return res.render("courses", {
            author,
        });

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
});



router.get("/:id", async (req, res) => {
    try {
        const author = await Author.findById(req.params.id).lean().exec()
        return res.status(201).send(author)
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }).lean().exec()
        res.status(201).send(author)
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id).lean().exec()
        res.status(201).send(author)
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})


module.exports = router;