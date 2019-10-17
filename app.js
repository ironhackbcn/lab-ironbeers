
const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path    = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/beers', async (req, res, next) => {
  const beers = await punkAPI.getBeers()
  res.render('beers', {beers}); 
});

app.get('/random-beer', async (req, res, next)=>{
  const beers = await punkAPI.getRandom()
  const [randomBeer] = beers
  console.log(randomBeer)
  res.render('random-beer', randomBeer); 
})


app.listen(3000, ()=>{
  console.log("I'm here!!!! 3000")
});
