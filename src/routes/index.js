const newsRouter = require('./news');
const homeRouter = require('./site');
const coursesRouter = require('./courses');
function route(app) {
    app.use('/news', newsRouter);

    app.use('/courses', coursesRouter);

    app.use('/', homeRouter);
}

module.exports = route;
