var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
var bcrypt = require('bcrypt')


function Users(){
  return knex('users');
}
/*Here someone is signing in-*/
router.post('/', function(req, res, next) {
  Users().insert(req.body).then(function(val){
    res.cookie('users', req.body.email);
    res.redirect("/tickets");
  });
});

/*Here someone is signing up*/
router.post('/login', function(req, res, next) {
    Users().where({email: req.body.email, password: req.body.password}).first().then(function(found){
       if (found){
         res.cookie('users', req.body.email);
         res.redirect("/tickets");
       } else {
         res.render("auth/yousuck");
       }
    })
});

router.get('/', function(req, res, next) {
  Users.select().then(function(users){
    res.render("users/index", {users: users});
  });
});

module.exports = router;
