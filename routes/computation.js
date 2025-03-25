var express = require('express');
var router = express.Router();

// Define the function based on the last digit of your ID
router.get('/', function(req, res, next) {
  // Get the query parameter or generate a random value
  let x = req.query.x ? parseFloat(req.query.x) : Math.random() * 10; // If x is passed as query, use it; otherwise, generate random value
  
  // Choose the function to apply based on the last digit of your ID (7)
  const lastDigit = 7; // Since your last digit is 7, we will apply all three functions

  // Apply all three functions in a sequence
  let resultAsin = Math.asin(x);
  let resultAsinh = Math.asinh(x);
  let resultCos = Math.cos(x);

  // Generate the response string
  let responseMessage = `
    Math.asin(${x}) = ${resultAsin} <br>
    Math.asinh(${x}) = ${resultAsinh} <br>
    Math.cos(${x}) = ${resultCos}
  `;

  // Send the response with all three computations
  res.send(responseMessage);
});

module.exports = router;
