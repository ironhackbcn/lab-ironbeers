
const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path    = require('path');  //require Path to get file locations
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(path.join(__dirname, 'public')));


//Route home-page:
app.get('/', (req, res, next) => {
  res.render('index');
});

//Route beers page:
app.get('/beers', (req, res, next) => {
  punkAPI.getBeers()
  .then(beers => {
    console.log(beers)
    res.render('beers', {beers});
  })
  .catch(error => {
    console.log(error)
  })
});

//Route random-beers page:
app.get('/random-beers', (req, res, next) => {
  punkAPI.getRandom()
  .then(beers => {
    console.log(beers);
    const [beer] = beers // destructuration of array
    res.render('random-beers', beer);
  })
  .catch(error => {
    console.log(error)
  })
});

// 404 error:
app.get('/*', (request, response, next) =>{
  console.log(request);
  response.sendFile(__dirname + '/views/notfound.hbs');
})

// localhost:3000:
app.listen(3000, () => {
  console.log('app listening on port 3000!');
});
