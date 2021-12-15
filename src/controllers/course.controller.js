const express = require('express');
const Course = require('../models/course.model');

const router = express.Router();

router.post("", async function (req, res) {
    // console.log("Yes")
    try {
        // console.log("---Yes")
        const course = await Course.create(req.body);
        return res.status(200).send(course);
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
});


router.get("", async (req, res) => {
    try {
        
        const course = await Course.find().lean().exec()
        return res.render("home", {
            course,
        });
        
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})
router.get("/search", async (req, res) => {
    try {
        
        const course = await Course.find().lean().exec()
        return res.render("courses", {
            course,
        });
        
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
});

router.get("/signup", async (req, res) => {
    try {
        
        const course = await Course.find().lean().exec()
        return res.render("signup", {
            course,
        });
        
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})
router.get("/login", async (req, res) => {
    try {
        
        const course = await Course.find().lean().exec()
        return res.render("login", {
            course,
        });
        
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})

router.get("/show", async function (req, res) {
    try {
        const course = await Course.find().lean().exec();
        res.status(201).send({course});
    }catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
});

module.exports = router;