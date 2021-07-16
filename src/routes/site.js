const express = require('express')
const route = express.Router()
const controller = require('../app/controllers/SiteController')

route.use('/search', controller.search)   
route.use('/', controller.index)

module.exports = route