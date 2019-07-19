'use strict';

const express = require('express');
// const PunkAPIWrapper = require('punkapi-javascript-wrapper');

// cuando es un archivo interno y no el principal (app.js) express nos permite crear un método como app que se llaman router
const router = express.Router();
// const punkAPI = new PunkAPIWrapper();

router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
