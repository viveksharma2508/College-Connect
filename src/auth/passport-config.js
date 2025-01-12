const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const { Users } = require('../db'); // Adjust path to your models

// Serialize user info (store user ID in session)
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user info (retrieve user from DB)
passport.deserializeUser(async (id, done) => {
  try {
    const user = await Users.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// Google OAuth Strategy
passport.use(new GoogleStrategy({
    clientID: 'YOUR_GOOGLE_CLIENT_ID',
    clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  },
  async (token, tokenSecret, profile, done) => {
    try {
      let user = await Users.findOne({ where: { providerId: profile.id, provider: 'google' } });

      if (!user) {
        user = await Users.create({
          username: profile.displayName,
          email: profile.emails[0].value,
          provider: 'google',
          providerId: profile.id
        });
      }

      return done(null, user);
    } catch (error) {
      done(error);
    }
  }
));

// Facebook OAuth Strategy
passport.use(new FacebookStrategy({
    clientID: 'YOUR_FACEBOOK_APP_ID',
    clientSecret: 'YOUR_FACEBOOK_APP_SECRET',
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await Users.findOne({ where: { providerId: profile.id, provider: 'facebook' } });

      if (!user) {
        user = await Users.create({
          username: profile.displayName,
          email: profile.emails[0].value,
          provider: 'facebook',
          providerId: profile.id
        });
      }

      return done(null, user);
    } catch (error) {
      done(error);
    }
  }
));

// GitHub OAuth Strategy
passport.use(new GitHubStrategy({
    clientID: 'YOUR_GITHUB_CLIENT_ID',
    clientSecret: 'YOUR_GITHUB_CLIENT_SECRET',
    callbackURL: 'http://localhost:3000/auth/github/callback'
  },
  async (token, tokenSecret, profile, done) => {
    try {
      let user = await Users.findOne({ where: { providerId: profile.id, provider: 'github' } });

      if (!user) {
        user = await Users.create({
          username: profile.username,
          provider: 'github',
          providerId: profile.id
        });
      }

      return done(null, user);
    } catch (error) {
      done(error);
    }
  }
));

module.exports = passport;
