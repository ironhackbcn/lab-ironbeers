const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/randombeers', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
