
const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const PORT = 3015;
const punkAPI = new PunkAPIWrapper();


// SET THE TEMPLATE ENGINE
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

//app.use(express.static(__dirname  '/public')));

// REGISTER THE PARTIAL 
//hbs.registerPartials(__dirname + '/partials');
hbs.registerPartials(__dirname + '/views/partials');;

app.use(express.static(__dirname + '/public'));

// ROUTES
app.get('/', (req, res, next) => {
  res.render('index');
});


app.get('/beers', (req, res, next) => {

  punkAPI.getBeers()

    // .then(beers => {
    //   console.log({ beers })
    //   const data = {
    //     beers: beers,
    //   }
    //   res.render('beers', data);

    // })
    // .catch(error => {
    //   console.log(error)
    // })

    .then((beersResult) => {
      console.log({ beersResult })
      res.render('beers', { beersResult });

    })
    .catch(error => {
      console.log(error)
    })
});

//beers




// START THE SERVER
//app.listen(3011);
app.listen(PORT, () => console.log(`Server listening on a PORT ${PORT}`));
