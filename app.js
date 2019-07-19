'use strict';

const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', (path.join(__dirname, '/views')));
app.use(express.static(path.join(__dirname, '/public')));
hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.get('/', (req, res, next) => {
  const home = {
    beer_src: '/images/beer.png',
    check_beer: 'Check the Beers!!',
    random_beer: 'Check a Random Beer!',
    check_beer_link: '/beers',
    random_beer_link: '/random-beer'
  };
  res.render('index', home);
});

app.get('/beers', (req, res, next) => {
  punkAPI.getBeers()
    .then(beers => {
      console.log(beers);
      res.render('beers', { beers });
    })
    .catch(error => {
      console.log(error);
    });
});

app.get('/random-beer', (req, res, next) => {
  punkAPI.getRandom()
    .then(beers => {
      console.log(beers);
      res.render('random-beer', { beers });
    })
    .catch(error => {
      console.log(error);
    });
});

app.listen(3000);
