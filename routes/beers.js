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

module.exports = router;
