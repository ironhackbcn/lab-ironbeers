
const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.get('/', (req, res, next) => {
  res.render('index');
});
app.get('/beers', (req, res, next) => {
  const beers = punkAPI.getBeers()
    .then(beersArr => {
      res.render('beers', { beersArr });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get('/random-beer', (req, res, next) => {
  const beers = punkAPI.getRandom()
    .then(beersArr => {
      console.log(beersArr);
      res.render('random-beer', beersArr[0]);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(3000);
