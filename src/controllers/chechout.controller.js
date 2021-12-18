const express = require('express');

const { body, validationResult } = require('express-validator');

const Payment = require('../models/checkout.model')
const Course = require('../models/course.model')

//const Author = require('../models/course.model');
const auth = require('../middleware/auth')
const router = express.Router();



router.get("", auth, async function (req, res) {
    try {
            const cookie = req.cookies.jwt;
            const author = Course.find().lean().exec();
            res.render("checkout", { author, cookie})
        
       
        
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})

router.post("/", body("name").isLength({ min: 4, max: 20 }).withMessage("Name is required"),
    body("card").isLength({ min: 16, max: 17 }).withMessage("Card Number is required"),
    body("month").isLength({ min: 1, max: 3 }).withMessage("Month is required"),
    body("year").isLength({ min: 4, max: 5 }).withMessage("Year is required"),
    body("security").isLength({ min: 3, max: 4 }).withMessage("Security is required"),
    body("country").isLength({ min: 4, max: 15 }).withMessage("Country is required"),
    body("state").isLength({ min: 4, max: 15 }).withMessage("State is required"),

    async (req, res) => {
        const errors = validationResult(req);
        try {
            if (!errors.isEmpty()) {
                let newError = errors.array().map(({ msg, param, location }) => {
                    let a = { [param]: msg }
                    console.log(a)
                    return {
                        [param]: msg,
                    };
                });
                return res.status(400).send("error is here");
            }
            const payment = await Payment.create(req.body);
            console.log(payment)
            return res.redirect("/home");
        } catch (e) {
            return res.send(500).json({ status: "failed", message: e.message });
        }
    })


module.exports = router;