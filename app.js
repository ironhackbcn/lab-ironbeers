
const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path');
const beerRoutes = require('./routes/beers');

app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, '/views/partials'));
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', beerRoutes);

// -- 404 and error handler

// NOTE: requires a views/not-found.ejs template
app.use((req, res, next) => {
  res.status(404);
  res.render('not-found');
});

// NOTE: requires a views/error.ejs template
app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500);
    res.render('error');
  }
});

app.listen(3000);
