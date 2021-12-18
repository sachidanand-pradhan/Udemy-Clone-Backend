const express = require('express');
const Author = require('../models/course.model');

const router = express.Router();

router.post('/courses', async function (req, res) {
    try {
        const author = await Author.create(req.body);
        return res.status(200).send(author);
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
});
router.get("/courses/show", async function (req, res) {
    try {
        const author = await Author.find().lean().exec()
        return res.status(200).send({author});
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})

router.get("/courses", async function (req, res) {
    try {
        const author = await Author.find().lean().exec()
        return res.render("courses",{
            author,
        });
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})

router.get("/home", async (req, res) => {
    try {
        const author = await Author.find().lean().exec();

        const cookie = req.cookies.jwt;
        return res.render("home", { author, cookie
        });

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})

router.get("/search", async (req, res) => {
    try {
        const author = await Author.find({}).lean().exec();

        return res.render("courses", {
            author,
        });
        
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
});

router.get("/search/:query", async (req, res) => {
    try {
        const author = await Author.find({type: req.params.query}).lean().exec();

        return res.render("courses", {
            author,
        });

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
});

router.get("/search/sort/:query", async (req, res) => {
    try {
        let q = req.params.query;
        let author;
        if(q == 1){
            author = await Author.find().sort({"price":1}).lean().exec();
        }else if(q == 2){
            author = await Author.find().sort({"price":-1}).lean().exec();
        }
        else if(q == 3){
            author = await Author.find().sort({"rating":-1}).lean().exec();
        }else if(q == 4){
            author = await Author.find().sort({"rating":1}).lean().exec();
        }
        return res.render(`courses`, {
            author
        })

    } catch (e) {
        return res.render("error", ({
            status:"failed",message: e.message
        }));
    }
})

router.get("/desc/:id", async function (req, res) {
    const author = await Author.findById(req.params.id).lean().exec();

    return res.render("desc",{
        author,
    });
});

router.get("/search/sort/desc/:id", async function (req, res) {
    const author = await Author.findById(req.params.id).lean().exec();

    return res.render("desc",{
        author,
    });
});



// router.get("/:id", async (req, res) => {
//     try {
//         const author = await Author.findById(req.params.id).lean().exec()
//         return res.status(201).send(author)
//     } catch (e) {
//         return res.status(500).json({ message: e.message, status: "Failed" })
//     }
// })

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


module.exports =  router;