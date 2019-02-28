// const express = require('express');
// const router = express.Router();

// router.get('/', function (req, res, next) {
//   res.render('index', { layout: 'layout' });
// });

const express = require('express');
const router = express.Router();
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

/* GET users listing. */
router.get('/', function (req, res, next) {
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

router.get('/beers/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const beerArray = await punkAPI.getBeer(id);
    res.render('beer-detail', { beer: beerArray[0] });
  } catch (error) {
    next(error);
  }
});

router.get('/random-beer', async (req, res, next) => {
  try {
    const randomBeerArray = await punkAPI.getRandom();
    console.log(randomBeerArray);
    res.render('random-beer', { beer: randomBeerArray[0] });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
