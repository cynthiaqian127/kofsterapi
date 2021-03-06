/**
 * Created by Eduardo Velloso on 10/04/2017.
 */
// Set up express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Database setup
require('./models/db.js');

// Routes setup
var routes = require('./routes/routes.js');
app.use('/',routes);

// Start the server
app.listen(3000,function(req,res){
   console.log('Express listening on port 3000');
});