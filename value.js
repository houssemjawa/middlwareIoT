var mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

/**
* Value Schema
*/

var Value = new Schema({
  _msgid:{
    type: String
  },
  topic: {
    type: String
  },
  payload :{
    type: Number
  },

});

module.exports = mongoose.model('value',Value);
