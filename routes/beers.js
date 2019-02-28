const express = require('express');
const router = express.Router();
const axios = require('axios');
/* GET home page. */
router.get('/beers', (req, res, next) => {
  const data2 = {
    title: 'Hola Mundo 2!'
  };
  res.render('beers', data2);
  /*axios.get('https://jsonplaceholder.typicode.com/todos/')
    .then(response => {
      data2.response = response.data;
      res.render('beers', data2);
    })
    .catch(err => console.log(err));*/
});

module.exports = router;

