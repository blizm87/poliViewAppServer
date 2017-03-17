const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/', (req, res, next) => {
  const url = req.query.trivQuery;
  console.log('I am the trivia request: ' + url)
  console.log('I am the second request: ' + url)
  request.get(url, (err, response, body) => {
    const preData = JSON.parse(body).results[0];
    console.log('I am the trivia data: ' + preData)
    res.json({data: preData});
  });
});

module.exports = router;
