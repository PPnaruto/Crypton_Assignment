
const User = require('../Model/UserData.model');

const getData = async (req,res)=>{
    try{
        const User_data = await User.find();

        res.send({
            data:User_data
        })
    }catch(err){
        console.error(err.message);
    }
}

const postData = async (req,res)=>{
    try{
        const data = req.body;
        const User_data =await User.create(data);

        res.send({
            data:User_data
        })
    }catch(err){
        console.error(err.message);
    }
}

const updataData = async (req,res)=>{
    try{
        const data = req.body;
        const id = req.params.id;
        const User_data = await User.findByIdAndUpdate(id,data,{new:true});
      
        res.send({
            data:User_data
        })
    }catch(err){
        console.error(err.message);
    }
}

const deleteData = async (req,res)=>{
    try{
        const id = req.params.id;
        const Employee_data = await User.findByIdAndDelete(id);
      
        res.send({
            data:Employee_data
        })
    }catch(err){
        console.error(err.message);
    }
}

module.exports = {
    getData,
    postData,
    updataData,
    deleteData
}