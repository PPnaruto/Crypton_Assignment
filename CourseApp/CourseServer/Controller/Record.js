
const Course = require('../Model/Course.model');

const getData = async (req,res)=>{
    try{
        const Course_data = await Course.find();

        res.send({
            data:Course_data
        })
    }catch(err){
        console.error(err.message);
    }
}

module.exports = {
    getData
}