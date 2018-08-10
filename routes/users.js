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

// Find user profile after Login

router.get('/:id', auth.requireLogin, (req, res) => {
  const currentUserId = req.session.userId;

  User.findById(currentUserId, (err, user) => {
    if (err) { console.log(err); }
    res.render('users/index', { user: user, title: 'Soccer without Borders', currentUserId: currentUserId });
  });
});

// User edit profile
router.get('/:id/edit', auth.requireLogin, (req, res) => {
  User.findById(req.session.userId, (err, user) => {
    if (err) { console.error(err); }

    res.render('users/edit', { user });
  });
});

// User update profile
router.post('/:id/edit', (req, res) => {
  User.findByIdAndUpdate(req.session.userId, { $set: req.body }, (err, user) => {
    if (err) { console.error(err); }

    console.log(`works: ${user}`)
    res.redirect(`/users/${req.session.userId}`);
  });
});

//
// router.post('/users/:id/edit', auth.requireLogin, (req, res) => {
//   User.findByIdAndUpdate(req.session.id, req.body, (err, user) => {
//     if(err) { console.error(err) };
//
//       res.render('/users/');
//     });
//   })

module.exports = router;
