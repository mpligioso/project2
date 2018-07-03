const express = require("express");
const Room = require('../models/events-model.js');

const router = express.Router();

router.get("/event/add", (req, res, next) => {
  // if (!req.user) {
  //   req.flash("error", "You must be logged in to add an event!")
  //   res.redirect("/login")
  //   return
  // }
  res.render("event-views/event-form.hbs")
})

router.post("/add-event", (req, res, next) => {
  // if (!req.user) {
  //   req.flash("error", "Only users can add an event")
  //   res.redirect("/login")
  //   return
  // }
  const { title,
    price,
    photoUrl,
    description,
    email,
    telephone,
    city,
    postalCode,
    address
  } = req.body;

  Event.create ( {title,
    price,
    photoUrl,
    description,
    contact.email,
    contact.telephone,
    location.city,
    location.postalCode,
    location.address} )
    .then((eventDoc) => {
      req.flash("success", "Event created!")
      res.redirect("/my-events");
    })
    .catch((err)=> {
      next(err);
    });
});

router.get("/my-rooms", (req, res, next) => {
  if (!req.user) {
    req.flash("error", "you're not logged in, sorry!")
    res.redirect("/login")
    return
  };

  //this is a filter to only search for rooms belonging to owner
  Room.find( {owner: req.user._id } )
  .then((roomResults) => {
    res.locals.roomArray = roomResults;
    res.render("room-views/room-list.hbs")
  })
  .catch((err) => {
    next(err);
  })

})

module.exports = router;