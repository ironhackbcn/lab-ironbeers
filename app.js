
const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();
var indexRouter = require('./routes/index');
var beersRouter = require('./routes/beers');
var randomBeersRouter = require('./routes/randombeers');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/beers', beersRouter);
app.use('/randombeers', randomBeersRouter);

hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/beers', (req, res, next) => {
  punkAPI.getBeers()
    .then(response => {
      console.log(response);
      res.render('beers', { response: response });
    })
    .catch(error => console.log(error));
});

app.get('/randombeers', (req, res, next) => {
  // punkAPI.getRandom()
  //   .then(response => {
  //     res.render('randombeers', { response: response });
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
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
