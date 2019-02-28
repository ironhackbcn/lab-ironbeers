const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path');

const beersRouter = require('./routes/beers');

// CONFIGS
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));

// hbs.registerPartial('partial-beer', path.join(__dirname, '/views/partial.hbs', 'utf8'));
hbs.registerPartials(path.join(__dirname, '/views/partials'));

// ROUTES
app.use('/', beersRouter);

// 404 and error handler
app.use((req, res, next) => {
    res.status(404);
    res.render('not-found');
});

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
