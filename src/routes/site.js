const express = require('express');
const route = express.Router();
const controller = require('../app/controllers/SiteController');

route.get('/search', controller.search);
route.get('/', controller.index);

module.exports = route;
