// const express = require('express');
// const router = express.Router();

// router.get('/', function (req, res, next) {
//   res.render('index', { layout: 'layout' });
// });

const express = require('express');
const router = express.Router();
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();
const beersRouter = require('./routes/beers');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
