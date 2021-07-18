const express = require('express');
const route = express.Router();
const controller = require('../app/controllers/NewsController');

route.get('/:slug', controller.show);
route.get('/', controller.index);

module.exports = route;
