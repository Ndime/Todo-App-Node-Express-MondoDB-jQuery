var express = require('express');
var app = express();
var port = 3000; //process.env.PORT ||
var bodyParser = require("body-parser");


//Routes
var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile("index.html");
});

app.use("/api/todos", todoRoutes);

app.listen(port, function() {
  console.log("App is Running On Port " + port);
});
