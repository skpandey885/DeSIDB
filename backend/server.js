const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();


app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json());

const username = "admin-meh";
const password = "xfyuqfHXQps97z6";
const cluster = "cluster0.rfp7p";
const dbname = "studentDB";

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



app.listen(3000, () => {
  console.log("Server is running at port 3000");
});


