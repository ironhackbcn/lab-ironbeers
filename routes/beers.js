const express = require('express');

const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const router = express.Router();

const punkAPI = new PunkAPIWrapper();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/beers', async (req, res, next) => {
  try {
    const beers = await punkAPI.getBeers();
    res.render('beers', { beers });
  } catch (error) {
    // ponemos un next para que si hay un error siga ejecutandose, seria un error 500. Te manda a la ruta de error que esta en la app.js
    next(error);
  }
});

module.exports = router;
