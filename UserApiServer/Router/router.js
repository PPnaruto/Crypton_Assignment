const express = require('express');
const { getData, postData, updataData, deleteData } = require('../Controller/Records');

const appRouter = express.Router();

appRouter.get('/',getData);
appRouter.post('/',postData);
appRouter.patch('/:id',updataData);
appRouter.delete('/:id',deleteData);


module.exports = appRouter;