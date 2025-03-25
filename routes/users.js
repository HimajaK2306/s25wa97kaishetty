var express = require('express');
var router = express.Router();

// Create the ratio and acc variables
var ratio = 0.75;
var acc = 1000;

/* GET users listing. */
router.get('/', function(req, res, next) {
  acc *= ratio; // Multiply acc by ratio
  res.send(`Value is: ${acc}`); // Send the result as "Value is: <calculated_value>"
});

module.exports = router;

