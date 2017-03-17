const express = require('express');
const request = require('request');
const entities = require('html-entities').AllHtmlEntities;
const router = express.Router();
const title = 'PoliView Entertainment';

router.get('/', (req, res, next) => {
  const url = req.query.trivQuery;
  console.log('I am the trivia request: ' + url)
  // request.get(url, (err, response, body) => {
  //   const preData = JSON.parse(body).results[0];
  //   var data = entities.decode(preData);
  //   res.send(data);
  // });
});

module.exports = router;
