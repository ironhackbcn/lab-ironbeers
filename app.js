'use strict';

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
  punkAPI.getBeers()
    .then(beers => {
      res.render('beers', { beers });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get('/random-beer', (req, res, next) => {
  const randomNum = Math.floor(Math.random() * 25);
  console.log(randomNum);
  punkAPI.getBeers()
    .then(beers => {
      console.log('aquí va la random beer', beers[randomNum]);
      const randomBeer = beers[randomNum];
      res.render('random-beers', randomBeer);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get('/*', (req, res, next) => {
  res.render('page-not-found');
});

app.listen(3000);
