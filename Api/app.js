var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
var expressValidator = require("express-validator");
var fs = require('fs');

var app = express();


app.use(express.static(path.join(__dirname, 'node_modules/swagger-ui/dist')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: "ljsdckjhf77BHJJ8",
    resave: false,
    saveUninitialized: true

}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

//var links = require('./routes/links.js');





// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


//app.use('/_ev', links);
//app.use('/_ev', authentication);

module.exports = app;

