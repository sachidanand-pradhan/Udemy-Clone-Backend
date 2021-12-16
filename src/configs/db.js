const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb+srv://sachida44:sachida44@cluster0.xiqh3.mongodb.net/udemy");
    // return mongoose.connect("mongodb://127.0.0.1:27017/movies");
};


// mongodb+srv://sachida44:sachida44@cluster0.xiqh3.mongodb.net/test