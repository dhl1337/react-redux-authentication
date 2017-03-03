const User = require('../models/user');

exports.signup = function (req, res, next) {
  // see if a user with the given email exist
  User.findOne({email: req.body.email}, function(err, existingUser) {

  })
};