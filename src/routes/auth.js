const express = require('express');
const passport = require('passport');
const router = express.Router();

// Google OAuth routes
router.get('/auth/google',
  passport.authenticate('google', { scope: ['email'] }));

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/'); // Redirect to home or dashboard after successful login
  });

// Facebook OAuth routes
router.get('/auth/facebook',
  passport.authenticate('facebook', { scope: ['email'] }));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/'); // Redirect to home or dashboard after successful login
  });

// GitHub OAuth routes
router.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email'] }));

router.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/'); // Redirect to home or dashboard after successful login
  });

module.exports = router;
