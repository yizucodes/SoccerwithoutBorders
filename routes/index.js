const express = require('express');

const router = express.Router();
const User = require('../models/user');

// set layout variables
router.use(function(req, res, next) {
  res.locals.title = "Soccer without Borders";
  res.locals.currentUserId = req.session.userId;

  next();
});

router.get('/',(req, res, next) => {
  res.redirect('/login');
});




// login
router.get('/login', (req, res, next) => {
  const currentUserId = req.session.userId;

  res.render('login', { title: 'Soccer without Borders', currentUserId: currentUserId });
});

// POST login
router.post('/login', (req, res, next) => {
  User.authenticate(req.body.username, req.body.password, (err, user) => {
    if (err || !user) {
      const next_error = new Error("Username or password incorrect");
      next_error.status = 401;

      return next(next_error);
    } else {
      req.session.userId = user._id;

      res.redirect(`/users/${req.session.userId}`) ;
    }
  });
});

//logout
router.get('/logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) return next(err);
    });
  }

  return res.redirect('/login');
});

module.exports = router;
