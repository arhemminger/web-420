/*
============================================
; Title:  API Gateway Part II
; Author: Professor Krasso
; Date:  12 May 2019
; Modified by: Andrew Hemminger
; Description: Exercise 2.3 - API Gateway Part II
;===========================================
*/
var header = require('../hemminger-header');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 2.3'));
console.log('\n');

// start program

/**
 Fields username, password, and email
 */

var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

module.exports = mongoose.model('User', userSchema);


/**
 Database queries
 */


 // end program
