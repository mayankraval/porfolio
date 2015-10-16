var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hola, Mayank Raval !!!' , message : 'Welcome to my personal Web !!!'});
});

//Get about page
router.get('/about', function(req,res,next) {
    var ranNum = Math.random();
    res.render('About',{title : 'About Me'});
});

//Get sevice page
router.get('/services', function(req,res,next) {
    var ranNum = Math.random();
    res.render('Services',{title : 'Services'});
});

//Get contact page
router.get('/contact', function(req,res,next) {
    var ranNum = Math.random();
    res.render('Contact',{title : 'Get in Touch!!!'});
});

module.exports = router;
