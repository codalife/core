// Require our dependencies'
require('./server/config/mongoose.js');

var express = require('express'),
  React = require('react'),
  ReactDOMServer = require('react-dom/server'),
  bodyParser = require('body-parser');

// Create an express instance and set a port variable
var app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// Set /public as our static content dir
app.use("/", express.static(__dirname + "/public"));

app.use(function(req, res, next){
  if(req.headers['x-forwarded-ptoto'] == 'https'){
    res.redirect('https://'+req.hostname+req.url)
  } else {
    next();
  };
})

//require('./server/config/routes.js')(app);

// Fire it up (start our server)
var server = app.listen(PORT, function() {
  console.log('Express server listening on port ' + PORT);
});
