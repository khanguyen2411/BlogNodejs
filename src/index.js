// import library
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');

init();

//route init
route(app);

app.listen(port);

function init() {
    app.use(express.static(path.join(__dirname, 'public')));

    app.use(
        express.urlencoded({
            extended: true,
        }),
    );

    app.use(express.json());

    //http logger
    app.use(morgan('combined'));

    //set template engine
    app.engine(
        'hbs',
        handlebars({
            extname: '.hbs',
        }),
    );

    app.set('view engine', 'hbs');

    //set views folder to express-handlbars
    app.set('views', path.join(__dirname, 'resources', 'views'));

    db.connect();
}
