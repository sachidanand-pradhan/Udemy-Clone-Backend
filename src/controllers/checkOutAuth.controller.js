const user = require('../models/signup.model')

app.get('/checkoutAuth', auth , (req,res)=>{
    res.render('signup');
})
