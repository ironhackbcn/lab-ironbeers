
const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/beers', (req, res, next) => {
  const data = {
    title: 'Esto es un título',
    subtitle: 'Segundo título'
  };
  punkAPI.getBeers()
    .then(beers => {
      data.beers = beers;
      console.log(data.beers);
      res.render('beers', data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.get('/random-beers', (req, res, next) => {
  res.render('random-beers');
});

app.listen(3000);

// app.use((req, res, next) => {
//   res.status(404);
//   res.render('not-found');
// });

// // NOTE: requires a views/error.ejs template
// app.use((err, req, res, next) => {
//   // always log the error
//   console.error('ERROR', req.method, req.path, err);

//   // only render if the error ocurred before sending the response
//   if (!res.headersSent) {
//     res.status(500);
//     res.render('error');
//   }
// });

// module.exports = app;
