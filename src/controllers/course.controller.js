const express = require('express');
const Course = require('../models/course.model');

const router = express.Router();

router.post("", async function (req, res) {
    // console.log("Yes")
    try {
        console.log("---Yes")
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
        return res.render("home", {
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
})

// router.get("/:id", async (req, res) => {
//     try {
//         const author = await Course.findById(req.params.id).lean().exec()
//         return res.status(201).send(author)
//     } catch (e) {
//         return res.status(500).json({ message: e.message, status: "Failed" })
//     }
// })

// router.patch("/:id", async (req, res) => {
//     try {
//         const author = await Course.findByIdAndUpdate(req.params.id, req.body, {
//             new: true
//         }).lean().exec()
//         res.status(201).send(author)
//     } catch (e) {
//         return res.status(500).json({ message: e.message, status: "Failed" })
//     }
// })

// router.delete("/:id", async (req, res) => {
//     try {
//         const author = await Author.findByIdAndDelete(req.params.id).lean().exec()
//         res.status(201).send(author)
//     } catch (e) {
//         return res.status(500).json({ message: e.message, status: "Failed" })
//     }
// })


module.exports = router;