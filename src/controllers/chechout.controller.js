const express = require('express');

const Payment = require('../models/checkout.model')

const Author = require('../models/course.model');

const router = express.Router();



router.get("/", async function (req, res) {
    try {
        const author = Author.find().lean().exec();
        res.render("checkout", author)
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})


// router.post("/payment", async (req, res) => { //productImages - name anythings fine
//     try{
//         const payment = await Payment.create({
//             name: req.body.name,
//             price: req.body.price,
//         });
//         // console.log("payment",payment);

//         return res.redirect(`home`)
       
//         // return res.status(200).send(payment);
        
//     }catch(e){
//         return res.status(500).json({ status:"failed",message: e.message });
//     }
// });

module.exports = router;