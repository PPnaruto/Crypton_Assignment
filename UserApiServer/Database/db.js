const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({
    path:"./env"
});

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

function connection(){
    mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.ytjszoj.mongodb.net/UserData`);
}

module.exports = (connection);

