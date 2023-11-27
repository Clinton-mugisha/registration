const express = require('express');
const Reg = require('../models/registration')
const router = express.Router();
const session = require('express-session');

router.get('/form', (req, res)=>{
    res.render('registration.pug')
});

router.post('/reg', async(req, res) => {
    try{
        const car = new Reg(req.body);
        await car.save();
        console.log(req.body);
        res.redirect('back') // redirect to home page
       
    }catch(error){
        res.status(400).render('registration')
        console.log(error)
        //we redirect a path we render a file

    }

});

module.exports = router