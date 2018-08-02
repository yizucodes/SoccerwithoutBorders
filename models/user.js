const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  // name: { type: String, required: true },
  // age: { type: Number, required: false },
  // hometown: { type: Date, required: false },
  // height: { type: String, required: false },
  // weight: { type: String, required: false },
});

UserSchema.pre('save', function (next) {
  let user = this;

  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) return next(err);

    user.password = hash;
    next();
  })
});

UserSchema.statics.authenticate = function (username, password, next) {
  User.findOne({ username: username })
    .exec(function (err, user) {
      if (err) {
        return next(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return next(err);
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return next(null, user);
        } else {
          return next();
        }
      });
    });
}

const User = mongoose.model('User', UserSchema);
module.exports = User;


