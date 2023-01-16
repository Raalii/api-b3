var express = require("express");
var app = express();
require("dotenv").config();
const mongoose = require('mongoose');

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("successfully connect to database");
  })
  .catch((err) => console.log(err));

app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

console.log("serveur");

code =
  "mongodb+srv://root:<password>@cluster0.h9d4ptt.mongodb.net/?retryWrites=true&w=majority";
