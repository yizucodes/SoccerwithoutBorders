const express = require('express');

const router = express.Router();
const User = require('../models/user');

const auth = require('./helpers/auth')

//Users index

router.get('/', (req, res, next) => {
  User.find({}, 'username', function (err, users) {
    if (err) {
      console.error(err);
    } else {
      res.render('users/index', { users: users });
    }
  });
});

// Users new
router.get('/new', (req, res, next) => {
  res.render('users/new');
});

// Users create
router.post('/', (req, res, next) => {
  const user = new User(req.body);

  user.save(function (err, user) {
    if (err) console.log(err);
    return res.redirect('/users');
  });
});
//
// // Rooms show
// router.get('/:id', auth.requireLogin, (req, res, next) => {
//   Room.findById(req.params.id, function(err, room) {
//     if(err) { console.error(err) };
//
//     res.render('rooms/show', { room: room });
//   });
// });

//Finding user profile after Login - how do I make this to work?

router.get('/login', auth.requireLogin, (req, res) => {
  User.findbyId(req.params.id, (err, user) => {
    if (err) { console.log(err); }
    res.render('users/index', { user: user });
  });
});


module.exports = router;
