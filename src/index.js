require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const cookieSession = require('cookie-session')
require('./passport');


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
const logout = require('./controllers/logout.controller');
const learning = require('./controllers/learning.controller');

// const google = require('./controllers/google.contoller')

app.use('/logout', logout);
app.use('/signup', sign);
app.use('/login', login);
app.use('/desc',desc);
app.use("/checkout", checkout);
app.use('/cart',cart);
app.use('/Mylearning',learning);
app.use("/", course);
//app.use('/google', google)

//Google Auth

// For an actual app you should configure this with an experation time, better keys, proxy and secure
app.use(cookieSession({
    name: 'jwt',
    keys: ['key1']
  }))

// Auth middleware that checks if the user is logged in
const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

// Initializes passport and passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Example protected and unprotected routes
app.get('/', (req, res) => res.render('/home'))
app.get('/failed', (req, res) => res.send('You Failed to log in!'))

// In this route you can see that if the user is logged in u can acess his info in: req.user
app.get('/home', isLoggedIn, (req, res) =>{
    res.render("/home",{name:req.user.displayName,email:req.user.emails[0].value})
})

// Auth Routes
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/home');
  }
);

// app.get('/logout', (req, res) => {
//     req.session = null;
//     req.logout();
//     res.redirect('/');
// })

module.exports = app;