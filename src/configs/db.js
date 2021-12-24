const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb+srv://sachida44:sachida44@cluster0.xiqh3.mongodb.net/udemy");
    // return mongoose.connect("mongodb://127.0.0.1:27017/movies");

    // This is for me for testing purpose... Please don't remove it.... BIGDADDY WALA THANKYOU
    //return mongoose.connect("mongodb://127.0.0.1:27017/udemy");
};


// mongodb+srv://sachida44:sachida44@cluster0.xiqh3.mongodb.net/test