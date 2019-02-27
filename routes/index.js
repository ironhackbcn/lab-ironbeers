// const express = require('express');
// const router = express.Router();
// const PunkAPIWrapper = require('punkapi-javascript-wrapper');
// const punkAPI = new PunkAPIWrapper();
// /* GET home page. */
// router.get('/', (req, res, next) => {
//   const data = {};
//   punkAPI.getBeers()
//     .then(beers => {
//       data.beer = beers;
//       res.render('/layout', data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

// module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { layout: 'layout' });
});
