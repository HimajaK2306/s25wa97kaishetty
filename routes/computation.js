var express = require('express');
var router = express.Router();

// Define the function based on the last digit of your ID
router.get('/', function(req, res, next) {
  // Get the query parameter or generate a random value
  let x = req.query.x ? parseFloat(req.query.x) : Math.random() * 10; // If x is passed as query, use it; otherwise, generate random value
  
  // Choose the function to apply based on the last digit of your ID (7)
  // Since your last digit is 7, we will apply all three functions

  let resultAsin = Math.asin(x).toFixed(2);
  let resultAsinh = Math.asinh(x).toFixed(2);
  let resultCos = Math.cos(x).toFixed(2);

  // Generate the response string with rounded results
  let responseMessage = `
    Math.asin(${x}) = ${resultAsin} <br>
    Math.asinh(${x}) = ${resultAsinh} <br>
    Math.cos(${x}) = ${resultCos}
  `;
  // Send the response with all three computations
  res.send(responseMessage);
});

module.exports = router;
