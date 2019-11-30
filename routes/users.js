const express = require('express');

const router = express.Router();

router.use(function timelog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
  res.send('Users will redirect to here');
});

module.exports = router;
