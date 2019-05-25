/*
============================================
; Title:  API Gateway Part III
; Author: Professor Krasso
; Date:  25 May 2019
; Modified by: Andrew Hemminger
; Description: Exercise 4.3 - API Gateway Part III
;===========================================
*/

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

// user.save is used to add a new user in our database
module.exports.add = (user, callback) => {
    user.save(callback);
}


module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
}

 // end program
