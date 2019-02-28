const express = require('express');
const router = express.Router();
// const PunkAPIWrapper = require('punkapi-javascript-wrapper');
// const punkAPI = new PunkAPIWrapper();

/* GET users listing. */
router.get('/beers', (req, res, next) => {
  res.render('beers');
});

module.exports = router;
