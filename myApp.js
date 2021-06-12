var express = require('express');
var app = express();

const absolutePath = __dirname + "/views/index.html";
const dotenv = require('dotenv');
dotenv.config();

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

app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ "message": "Hello json".toUpperCase() });
  } else {
    res.json({ "message": "Hello json" });
  }
});

module.exports = app;
