
const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));
app.set('view options', { layout: 'layout' });
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/beers', (req, res, next) => {
  // res.sendFile('/beers.html');

  const data = {};
  punkAPI.getBeers()
    .then(beers => {
      data.beer = beers;
      res.render('beers', data);
    })
    .catch(error => {
      console.log(error);
    });
});

// app.get('/random-beers', (req, res, next) => {
//   res.sendFile('/random-beers');
// });

app.use((req, res, next) => {
  res.status(404);
  res.render('error');
});

// NOTE: requires a views/error.ejs template
app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500);
    res.render('error');
  }
});

app.listen(3000);
