const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lessons:{
        type:String,
        required:true
    },
    start_date:{
        type:String,
        required:true
    },
    lessons_Completed:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
});

const Course = mongoose.model("course",CourseSchema);

module.exports = Course;