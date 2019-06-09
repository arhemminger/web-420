/*
============================================
; Title:  API Gateway Part IV
; Author: Professor Krasso
; Date:  8 June 2019
; Modified by: Andrew Hemminger
; Description: Exercise 6.3 - API Gateway Part IV
;===========================================
*/
var header = require('../hemminger-header');
console.log(header.display('Andrew', 'Hemminger', 'Exercise 6.3'));
console.log('\n');

// start program
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

// require statements for pages
var indexRouter = require('./routes/index');
var apiCatalog = require('./routes/api-catalog');

var app = express();

/**
 *
 * Database connection
 */
mongoose.connect('mongodb+srv://admin:admin@buwebdev-cluster-1-azmp4.mongodb.net/test?retryWrites=true', {
    promiseLibrary: require('bluebird')
}).then ( () => console.log('connection successful'))
  .catch( (err) => console.error(err));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// register the API catalog routes
app.use('/api', apiCatalog);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
// end program