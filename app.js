var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/submit', function (req, res) {
  var name = req.body.name;
  var email = req.body.email;

  console.log(name + " : " + email);
  res.send(name + " : " + email);
});

app.listen(3000, function () {
  console.log('VIIF listening on port 3000.');
});
