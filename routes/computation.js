var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
let x = req.query.x ? parseFloat(req.query.x).toFixed(2) : (Math.random() * 10).toFixed(2); 
x = parseFloat(x);
let validX = Math.max(-1, Math.min(1, x)); 
let resultAsin = Math.asin(validX).toFixed(2); 
let resultAsinh = Math.asinh(x).toFixed(2); 
let resultCos = Math.cos(x).toFixed(2); 
  let responseMessage = `
    Math.asin(${x}) = ${resultAsin} <br>
    Math.asinh(${x}) = ${resultAsinh} <br>
    Math.cos(${x}) = ${resultCos}
  `;
  res.send(responseMessage);
});

module.exports = router;
