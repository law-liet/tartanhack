var mongoose = require('mongoose'), 
  Schema = mongoose.Schema;

var BookSchema = new Schema({
  itemName      : String,
  ownerName     : String,
  ownerTelephone: String,
  price         : String,
  email         : String,
  //photo         : url,//not sure how to store pictures
  subject       : String,
  searchIndex   : String,
  description   : String, 
  itemDate      : { type: Date, default: Date.now},
  itemSold      : { type: Boolean, default: false}
});  

module.exports = mongoose.model('BookModel', BookSchema);