const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Router = require("./routes")
const cors = require('cors')
const app = express();
require('dotenv').config();
console.log(process.env);


app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json());
app.use(cors());

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const cluster = process.env.CLUSTER;
const dbname = process.env.DBNAME;

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

//check connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});



app.get("/", function(req,res){
    res.sendFile(__dirname + "/form.html")
})


app.use(Router);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is runnin");
});


