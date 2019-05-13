/*
============================================
; Title:  API Gateway Part I
; Author: Professor Krasso
; Date:  5 May 2019
; Modified by: Andrew Hemminger
; Description: Exercise 1.4 - API Gateway Part I
;===========================================
*/

// start program

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// end program
