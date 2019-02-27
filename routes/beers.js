const express = require('express');
const router = express.Router();
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

/* GET users listing. */
router.get('/beers', (req, res, next) => {
  let theBeers;

  punkAPI.getBeers()
    .then(response => {
      theBeers = response;
      console.log(response);
      res.render('beers', theBeers);
    })
    .catch(error => console.log(error));
});

module.exports = router;
