const app = require('express');
const router = app.Router();
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/beers', async (req, res, next) => {
    // const data = {};
    // punkAPI.getBeers()
    //     .then(beers => {
    //         data.beers = beers;
    //         // console.log(beers);
    //         res.render('beer', data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    try {
        const beers = await punkAPI.getBeers();
        res.render('beer', { beers }); // { beers: beers } es6
    } catch (error) {
        next(error); // ya lo cogeremos en el middleware
    }
});

router.get('/random-beers', async (req, res, next) => {
    // const data = {};
    // punkAPI.getRandom()
    //     .then(beers => {
    //         data.beers = beers;
    //         // console.log(data);
    //         res.render('random-beer', data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    try {
        const beer = await punkAPI.getRandom();
        res.render('random-beer', { beers: beer }); // { beer: beer } es6
    } catch (err) {
        next(err);
    }
});

module.exports = router;
