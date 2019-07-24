var express = require('express');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

var router = express.Router();

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

router.get('/random-beer', async (req, res, next) => {
  const randomBeer = await punkAPI.getRandom();
  try {
    res.render('random-beer', { beers: randomBeer[0] });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
