
const express = require('express');

const hbs = require('hbs');

const app = express();

const path = require('path');

const indexRouter = require('./routes/index');
const BeersRouter = require('./routes/beers');
const RandomBeerRouter = require('./routes/random-beer');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(path.join(__dirname, '/views/partials'));


app.use('/', indexRouter);

app.use('/beers', BeersRouter);

app.use('/random-beer', RandomBeerRouter);

app.listen(3000);
