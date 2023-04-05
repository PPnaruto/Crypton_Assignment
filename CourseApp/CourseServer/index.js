const express = require('express');
const cors = require('cors');

const dataRouter = require('./Router/router');

const connection = require('./Database/db');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/courses',dataRouter);

app.listen(8000,()=>{
    try{
        connection();
        console.log("server is listening on http://localhost:8000");
    }catch(err){
        console.error(err.message);
    }
    
})

