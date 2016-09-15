var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var exec = require('child_process').exec;

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

  var command = 'echo \"' +
    name + '\n' +
    email + '\n' +
    '\" | mailx -s \"Email title\" jp1326@jla.rutgers.edu'

  console.log(command);

  var child = exec(command, function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
});

app.listen(3000, function () {
  console.log('VIIF listening on port 3000.');
});
