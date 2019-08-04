const express = require('express');
const hbs = require('hbs');

const app = express();
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const punkAPI = new PunkAPIWrapper();


app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
app.use(express.static(path.join(__dirname, 'public')));

hbs.registerPartials(`${__dirname}/views/partials`);

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/beers', (req, res, next) => {
  punkAPI.getBeers()
    .then((beers) => {
      res.render('beers', {
        beers,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get('/random-beers', (req, res, next) => {
  // const randomBeer = Math.floor(Math.random() * 24) + 1;
  punkAPI.getRandom()
    .then((randomBeers) => {
      res.render('random-beers', randomBeers[0]);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get('/*', (req, res, next) => {
  res.render('page-404');
});

app.listen(3000);
