const newsRouter = require('./news')
const homeRouter = require('./site')
function route(app){

    app.use('/news', newsRouter)

    app.use('/', homeRouter)

}

module.exports = route