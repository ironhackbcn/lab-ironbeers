
const express = require('express');

const router = express.Router();

const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const punkAPI = new PunkAPIWrapper();

router.get('/', (req, res) => {
  punkAPI.getRandom()
    .then((beers) => {
      res.render('randomBeer', beers[0]);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
