const express = require('express');
const cookieParser = require('cookie-parser')

const app = express();


app.use(express.json());
app.use(cookieParser());


app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({extended:false}));

const course = require("./controllers/course.controller");
const sign = require('./controllers/signup.controller');
const login = require('./controllers/login.controller');
const auth = require('./middleware/auth');

const desc = require('./controllers/desc.controller');

const checkout = require("./controllers/chechout.controller")
const cart = require("./controllers/cart.controller")



app.use("/udemy",course);
app.use('/signup',sign);
app.use('/login',login);

app.use('/desc',desc);

//This API for when we checkout user logedin or not
app.get('/checkoutAuth', auth , (req,res)=>{
    res.render('signup');
})

app.use('/checkout',checkout);
app.use('/cart',cart);




module.exports = app;