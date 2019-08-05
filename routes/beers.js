/* eslint-disable indent */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */

const express = require('express');

const router = express.Router();

const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const punkAPI = new PunkAPIWrapper();

/* GET home page. */
router.get('/', function (req, res) {
    punkAPI.getBeers()
        .then((beers) => {
            res.render('beers', beers);
        })
        .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error);
        });
});

module.exports = router;
