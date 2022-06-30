const mongoose = require("mongoose");

const studentSchema =new mongoose.Schema({
    fname: String,
    lname: String,
    father: String,
    mother: String,
    gender: String,
    dob: Date,
    email: String,
    college: String,
    course: String,
    level: String,
    mobile: Number
});

const Student = mongoose.model("Student" , studentSchema);
module.exports = Student;