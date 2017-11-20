var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');
var mongoose = require('mongoose');
var promise = require('bluebird');
var expressValidator = require('express-validator');
var cookieParser = require('cookie-parser');
var mongoDBStore = require('connect-mongodb-session')(session);
mongoose.Promise = promise;

var app = express();

var store = new mongoDBStore({
    uri : 'mongodb://localhost/finalApniCare',
    collection : 'mySessions'
});

store.on('error', function (error) {
    assert.ifError(error);
    assert.ok(false);
});