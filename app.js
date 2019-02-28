
const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join( __dirname, '/views') );
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.render('index');
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(3000);
