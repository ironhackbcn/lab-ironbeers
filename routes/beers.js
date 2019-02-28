// const express = require('express');
// const router = express.Router();

// router.get('/', function (req, res, next) {
//   res.render('index', { layout: 'layout' });
// });

const express = require('express');
const router = express.Router();
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

router.get('/', async (req, res, next) => {
  const { name } = req.query;
  const query = {
    beer_name: name
  };

  try {
    const beers = await punkAPI.getBeers(query);
    res.render('beers', { beers });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const beerArray = await punkAPI.getBeer(id);
    if (beerArray.statusCode >= 400 && beerArray.statusCode <= 500) {
      next();
      return;
    }
    res.render('beer-detail', { beer: beerArray[0] });
  } catch (error) {
    next(error);
  }
});

// router.get('/random-beer', async (req, res, next) => {
//   try {
//     const randomBeerArray = await punkAPI.getRandom();
//     console.log(randomBeerArray);
//     res.render('random-beer', { beer: randomBeerArray[0] });
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
