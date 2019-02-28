
const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path');
const beersRouter = require('./routes/beers');
const indexRouter = require('./routes/index');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));
app.set('view options', { layout: 'layout' });
hbs.registerPartials(path.join(__dirname, '/views/partials'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/beers', beersRouter);

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
