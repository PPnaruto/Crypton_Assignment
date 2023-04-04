
const express = require('express');
const cors = require('cors');
const appRouter = require('./Router/router');
const connection = require('./Database/db');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/',appRouter);

app.listen(8080,()=>{
    try{
        connection();
        console.log("server is listening on http://localhost:8080");
    }catch(err){
        console.error(err.message);
    }
    
})

