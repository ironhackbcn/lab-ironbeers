const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path');

const indexRouter = require('./routes/index');
// const beersRouter = require('./routes/beers');
// const randomBeersRouter = require('./routes/randombeers');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
// app.use('/beers', beersRouter);
// app.use('/randombeers', randomBeersRouter);

app.use((req, res, next) => {
  res.status(404);
  res.render('notFound');
});

app.use((err, req, res, next) => {
  console.error('ERROR', req.method, req.path, err);

  if (!res.headersSent) {
    res.status(500);
    res.render('error');
  }
});

app.listen(3000);

module.exports = app;
