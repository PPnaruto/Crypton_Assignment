const mongoose = require('mongoose');


function connection(){
    mongoose.connect(`mongodb://127.0.0.1:27017/Web_Courses`);
}

module.exports = (connection);

