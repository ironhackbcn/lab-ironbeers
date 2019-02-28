const express = require('express');
const router = express.Router();
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();
/* GET users listing. */
router.get('/randombeers', (req, res, next) => {
  punkAPI.getRandom()
    .then(random => {
      res.render('randombeers', { random: random });
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
