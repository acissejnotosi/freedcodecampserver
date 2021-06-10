var express = require('express');
var app = express();

console.log("Hello World");

const responseString = function (req, res) {
  res.send('Hello Express');
};

app.get('/', responseString);
































module.exports = app;
