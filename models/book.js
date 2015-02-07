var mongoose = require('mongoose'), 
  Schema = mongoose.Schema;

var BookSchema = new Schema({
  itemName      : String,
  ownerName     : String,
  ownerTelephone: String,
  price         : String,
  email         : String,
  itemDate      : { type: Date, default: Date.now}, 
  //not sure here what to write//
  photo         : url,
  itemSold      : { type: Boolean, default: false}
});  

module.exports = mongoose.model('BookModel', BookSchema);