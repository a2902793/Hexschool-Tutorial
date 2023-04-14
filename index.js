var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('2023/04/15 02:47');
});

app.listen(8081, function () {
  console.log('Simple Web Application running on port 8081!');
});