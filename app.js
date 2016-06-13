var express = require('express');
var multer = require('multer');
var logger = require('morgan');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

var app = express();

//get our request parameters
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


//log to console
app.use(logger('dev'));

//set view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//for public files
app.use(express.static(path.join(__dirname,'public')));

//connect to database
var db = require('./db');
mongoose.connect(db.url);



//connect to routing bundles
var routes = require('./routes/index');
app.use('/',routes);

app.listen(port);
console.log('server listening at '+port);

