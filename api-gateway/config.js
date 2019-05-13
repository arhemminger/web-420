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
var config = {};

config.web = {};

config.web.port = process.env.PORT || "3000";

config.web.secret = 'topsecret';

module.exports = config;
// end program