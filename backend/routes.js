const express = require("express");
const studentModel = require("./models");
const app = express();

app.post("/delete" ,function(req,res){
  const {id} = req.body;
  studentModel.findByIdAndRemove(id,function(err){
    if(err){
      console.log(err);
    }else{
      res.redirect("/browse/verify");
    }
  });
})

app.post("/compose", function(req, res){
    
    const {fname,lname,father,mother, gender,dob,email,college,course,level,mobile} = req.body;

    const student = new studentModel({fname,lname,father,mother, gender,dob,email,college,course,level,mobile});
   
    console.log(student);
    student.save(function(err){
    if (err){
      console.log("error while saving student " + err);
      res.redirect("/");
    }
  });
  });

app.post("/add_user", async (req, res) => {
    const student = new studentModel(request.body);
  
    try {
      await user.save();
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
});

app.get("/api", async (req, res) => {
    const students = await studentModel.find({});
  
    try {
      res.send(students);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  module.exports = app;