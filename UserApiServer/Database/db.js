const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({
    path:'./UserApiServer/.env'
});

const USERNAME = process.env.CLUSTER_USERNAME;
const PASSWORD = process.env.CLUSTER_PASSWORD;
// console.log(USERNAME,PASSWORD)

function connection(){
    mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.ytjszoj.mongodb.net/UserData`);
}

module.exports = (connection);

