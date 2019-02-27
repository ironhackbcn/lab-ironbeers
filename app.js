
const express = require('express');
// const hbs = require('hbs');
const app = express();
const path = require('path');
// const PunkAPIWrapper = require('punkapi-javascript-wrapper');
// const punkAPI = new PunkAPIWrapper();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/beers');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/beers', (req, res, next) => {
  res.render('beers');
});

app.get('/randombeers', (req, res, next) => {
  res.render('randombeers');
});

app.use((req, res, next) => {
  res.status(404);
  res.render('not-found');
});

app.use((err, req, res, next) => {
  console.error('ERROR', req.method, req.path, err);

  if (!res.headersSent) {
    res.status(500);
    res.render('error');
  }
});

app.listen(3000);

module.exports = app;
