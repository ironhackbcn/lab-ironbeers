
const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

// Partials
hbs.registerPartials(__dirname + '/views/partials');

/******* RUTAS ********/
app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/beers', (req, res, next) => {

  let prova = {
    cities: ["Miami", "Madrid", "Barcelona", "Paris", "México", "Berlín"]
  }

  punkAPI.getBeers()
    .then(beers => {
      console.log(Object.values(beers));
      res.render('beers', { beers });
    })
    .catch(error => {
      console.log("This is the error; ", error)
    })
});

app.get('/random-beers', (req, res, next) => {
  res.render('random-beer');
});

app.listen(3000);
