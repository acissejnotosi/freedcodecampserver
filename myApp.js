var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const absolutePath = __dirname + "/views/index.html";
const dotenv = require('dotenv');
dotenv.config();

app.use(function (req, _res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});


app.use(bodyParser.urlencoded({ extended: false }));

// Send string as response
/* const responseString = function (req, res) {
  res.send('Hello Express');
};
app.get('/', responseString);
 */

//Send file as response
app.get("/", function (req, res) {
  res.sendFile(absolutePath);
});

//Serve Static Assets
app.use("/public", express.static(__dirname + "/public"));

console.log(process.env.MESSAGE_STYLE);

app.get("/json", function (_req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ "message": "Hello json".toUpperCase() });
  } else {
    res.json({ "message": "Hello json" });
  }
});

app.get('/now', function (req, _res, next) {
  req.time = new Date().toString();
  next();
}, function (req, res) {
  res.json({ "time": req.time });
});

app.get("/:word/echo", function (req, res) {
  res.json({ "echo": req.params.word });
});

app.get("/name", function (req, res) {
  res.json({ "name": `${req.query.first} ${req.query.last}` });
});


module.exports = app;
