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
    next(error);
  }
});

router.get('/randomBeer', async (req, res, next) => {
  try {
    const randomBeerArray = await punkAPI.getRandom();
    res.render('randomBeer', { beer: randomBeerArray[0] });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
