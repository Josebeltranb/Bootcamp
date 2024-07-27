var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/chau', function(req, res, next) {
  res.send('respond with chau');
});


module.exports = router;
