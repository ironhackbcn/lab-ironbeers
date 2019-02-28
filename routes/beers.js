const express = require('express');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const router = express.Router();

const punkAPI = new PunkAPIWrapper();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
