var express = require('express');
var app = express();

const absolutePath = __dirname + "/views/index.html";


// Send string as response
/* const responseString = function (req, res) {
  res.send('Hello Express');
};
app.get('/', responseString);
 */

//Send file as response
app.get('/', function (req, res) {
  res.sendFile(absolutePath);
});

//Serve Static Assets
app.use(express.static(__dirname + "/public/style/.css"));

module.exports = app;
