const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send("I worked!!!")
})

// router.get('/trivGame', (req, res, next) => {
//   console.log('I am the category: ' + req.query.category)
//   let url = `https://www.opentdb.com/api.php?amount=1&category=${req.query.category}&difficulty=medium&type=multiple`
//   console.log('I am the url: ' + url)
//   request.get(url, (err, response, body) => {
//     const preData = JSON.parse(body).results[0];
//     res.json({data: preData});
//   });
// });

// router.get('/quote', (req, res, next) => {
//   let url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
//   request.get(url, (err, response, body) => {
//     console.log(body)
//     const data = JSON.parse(body).results[0];
//     console.log('I am the data: ' + data)
//     res.json({data: response});
//   });
// });

module.exports = router;
