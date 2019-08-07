const express = require('express');
const hbs = require('hbs');

const app = express();
const path = require('path');

const indexRouter = require('./routes/index');
const BeersRouter = require('./routes/beers');
const RandomBeerRouter = require('./routes/random-beer');


app.set('view engine', 'hbs');
// app.set('views', __dirname + '/views');
app.set(express.static(path.join(__dirname, '/views')));
app.use(express.static(path.join(__dirname, 'public')));

// hbs.registerPartials(__dirname + '/views/partials')
hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.use('/', indexRouter);

app.use('/beers', BeersRouter);

app.use('/random-beers', RandomBeerRouter);


// app.get('*', (req, res, next) => {
//   res.render('404');
// });

app.listen(3000);
