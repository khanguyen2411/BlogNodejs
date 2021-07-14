// import library
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

//http logger
app.use(morgan('combined'))

//set template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

//set views folder to express-handlbars
app.set('views', path.join(__dirname, "resources\\views"))


//render homepage
app.get('/', (req, res) => {
  res.render('home');
})

//render news page: localhost3000/news
app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port)
