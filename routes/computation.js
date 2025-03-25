var express = require('express');
var router = express.Router();

// Define the function based on the last digit of your ID
router.get('/', function(req, res, next) {
  // Get the query parameter or generate a random value, and round to 2 decimal places
  let x = req.query.x ? parseFloat(req.query.x).toFixed(2) : (Math.random() * 10).toFixed(2); // If x is passed as query, use it; otherwise, generate random value
  
  // Convert x back to float after rounding to two decimals
  x = parseFloat(x);

  // Clamp the value of x for asin to stay within the range [-1, 1]
  let validX = Math.max(-1, Math.min(1, x)); // Ensure asin argument is in valid range for asin

  // Apply the functions
  let resultAsin = Math.asin(validX).toFixed(2); // Valid asin result after clamping
  let resultAsinh = Math.asinh(x).toFixed(2); // Asinh is valid for all real values
  let resultCos = Math.cos(x).toFixed(2); // Cosine is valid for all real values

  // Generate the response string with results
  let responseMessage = `
    Math.asin(${x}) = ${resultAsin} <br>
    Math.asinh(${x}) = ${resultAsinh} <br>
    Math.cos(${x}) = ${resultCos}
  `;

  // Send the response with all three computations
  res.send(responseMessage);
});

module.exports = router;
