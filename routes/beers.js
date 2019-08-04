'use strict';

const express = require('express');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

// cuando es un archivo interno y no el principal (app.js) express nos permite crear un método como app que se llaman router
const router = express.Router();
const punkAPI = new PunkAPIWrapper();

router.get('/', (req, res, next) => {
  punkAPI.getBeers()
    .then(beers => {
      res.render('beers', { beers });
    }).catch(error => {
      console.log(error);
    });
});

router.get('/random-beer', (req, res, next) => {
  punkAPI.getRandom()
    .then(beers => {
      res.render('random-beer', { beers });
      console.log(beers);
    }).catch(error => {
      console.log(error);
    });
});

module.exports = router;
