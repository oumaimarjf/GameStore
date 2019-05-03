'use strict';
var express = require('express');
var path = require('path');
require('babel-register');

var app = express();
app.use(express.static(path.join(__dirname, 'src')));


app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'src', 'index.html'))
})


app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});


