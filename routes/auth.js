var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt')

router.get('/', function(req, res, next) {
  if (req.cookies.user){
    res.redirect('/tickets')
  } else
    res.render('auth/signin', {button_text: 'please sign in'})
});

/*Check if user is already signed in- if yes, render yougood, otherwise redirect to sign in*/
router.get('/signin', function(req, res, next) {
    if(req.cookies.user){
      res.redirect('/tickets');
    } else {
      res.render("auth/signin", {button_text: "sign in"});
    };
});

/*When a user signs out, clear the user cookie from our db*/
router.get('/signout', function(req, res, next) {
    res.clearCookie('users');
    res.render("auth/signin", {button_text: "sign in", notice: "you have been signed out"});
});

/*When a user signs up, add the user cookie to our db*/
router.get('/signup', function(req, res, next) {
    res.render("auth/signup", {button_text: "sign up"});
});

/*If you don't exist in the db, tell the user you aren't authorized*/
router.get('/no_auth', function(req, res, next) {
    res.render("auth/yousuck");
});





module.exports = router;
