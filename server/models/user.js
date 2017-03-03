const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define our model
const userSchema = new Schema({
  email: {type: String, unique: true, lowercase: true},
  password: {type: String}
});

// export the model
module.exports = mongoose.model('User', userSchema);
