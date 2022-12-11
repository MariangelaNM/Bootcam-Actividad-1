const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PeopleSchema = new Schema({

  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  class: {
    type: Number,
    required: true
  }
});

const People = mongoose.model('People', PeopleSchema);
module.exports = People;
