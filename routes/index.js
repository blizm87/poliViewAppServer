const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('I am the category: ' + req.query.category)
  let url = `https://www.opentdb.com/api.php?amount=1&category=${req.query.category}&difficulty=medium&type=multiple`
  console.log('I am the url: ' + url)
  request.get(url, (err, response, body) => {
    const preData = JSON.parse(body).results[0];
    res.json({data: preData});
  });
});

module.exports = router;
