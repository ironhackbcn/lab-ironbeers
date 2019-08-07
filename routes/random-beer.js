/* eslint-disable indent */
/* eslint-disable func-names */

const express = require('express');

const router = express.Router();

const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const punkAPI = new PunkAPIWrapper();

router.get('/', (req, res) => {
    punkAPI.getRandom()
        .then((beers) => {
            res.render('random-beer', beers[0]);
        })
        .catch((error) => {
            console.log(error);
        });
});

module.exports = router;
