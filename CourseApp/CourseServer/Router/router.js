const express = require('express');
const { getData } = require('../Controller/Record');

const dataRouter = express.Router();

dataRouter.get('/',getData);


module.exports = dataRouter;