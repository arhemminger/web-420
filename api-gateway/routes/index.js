/*
============================================
; Title:  API Gateway Part I
; Author: Professor Krasso
; Date:  5 May 2019
; Modified by: Andrew Hemminger
; Description: Exercise 1.4 - API Gateway Part I
;===========================================
*/
var header = require('../hemminger-header');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 1.4'));
console.log('\n');

// start program

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// end program
