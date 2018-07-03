const express = require('express');
const router  = express.Router();

const Event = require("../models/events-model.js")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/happening/:', (req, res, next) => {
  Event.find()
  .then((eventResults) => {
    res.locals.eventsArray = eventResults;
    res.render("search-collections.hbs")
  })
})

module.exports = router;
