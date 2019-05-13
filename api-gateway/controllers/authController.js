/*
============================================
; Title:  API Gateway Part II
; Author: Professor Krasso
; Date:  12 May 2019
; Modified by: Andrew Hemminger
; Description: Exercise 2.3 - API Gateway Part II
;===========================================
*/

// start program
var User = require('../models/user');

// Register a new user on POST
exports.user_register = function(req, res) {
    res.send('NOT IMPLEMENTED: User registration POST');
};

// Verify token on GET
exports.user_token = function(req, res) {
    res.send('NOT IMPLEMENTED: User token lookup GET');
};

// end program