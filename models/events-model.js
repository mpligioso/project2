const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema ( {

  frenchGovID: {type: String},
  title: {type: String},
  price: {type: String},
  // startDate: {type: String},
  // endDate: {type: String },
  contact: {
    email: {type: String, default: null},
    telephone: {type: String, default: null}
  },
  description: {type: String, default: null},
  location: {
    city: {type: String},
    postalCode: {type: String},
    address: {type: String},
    department: {type: String},
    longitude: {type: String},
    latitude:  {type: String},
  },
  eventCategory: {type: String}
}, {
  timestamps: true
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;