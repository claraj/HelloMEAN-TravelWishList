var mongoose = require('mongoose');

var place = new Schema( {
  name : String,
  country : String,
  visited : { Type : Boolean , default : false }
});


var PlaceSchema = mongoose.model('Destination', place);

module.exports = PlaceSchema;