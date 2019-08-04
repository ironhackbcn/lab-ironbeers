'use strict';

const express = require('express');
const router = express.Router();
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

router.get('/', (req, res, next) => {
  punkAPI.getBeers()
    .then(beers => {
      console.log(beers);
      res.render('beers', { beers });
    })
    .catch(error => {
      console.log(error);
    });
});

router.get('/randomBeer', (req, res, next) => {
  punkAPI.getRandom()
    .then(beers => {
      console.log(beers);
      res.render('randomBeer', { beers });
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
