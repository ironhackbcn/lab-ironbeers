const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(path.join(__dirname, '/views/partials'));

const index = require('./routes/index.js');
const beerRouter = require('./routes/beers.js');

app.use('/', index);
app.use('/beers', beerRouter);

app.listen(3000);
