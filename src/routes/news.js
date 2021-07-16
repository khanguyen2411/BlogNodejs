const express = require('express')
const route = express.Router()
const controller = require('../app/controllers/NewsController')

route.use('/:slug', controller.show)
route.use('/', controller.index)   

module.exports = route