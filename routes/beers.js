/* eslint-disable indent */

const express = require('express');

const router = express.Router();

const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const punkAPI = new PunkAPIWrapper();

/* GET home page. */
router.get('/', (req, res) => {
    punkAPI.getBeers()
        .then((beers) => {
            console.log(beers);
            res.render('beers', { beers });
        })
        .catch((error) => {
            console.log(error);
        });
});

module.exports = router;
