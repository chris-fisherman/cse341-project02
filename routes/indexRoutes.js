/************************/
/*** REQUIRE STATEMENTS ***/
/************************/
const express = require('express');
const router = express();
const moviesRoute = require('./moviesRoute');
const seriesRoute = require('./seriesRoute');
const swaggerRoute = require('./swaggerRoute');
const passport = require('passport');

/************************/
/*** ROUTES ***/
/************************/
/*** swagger - api documentation ***/
router.use('/', swaggerRoute);
/*** movies ***/
router.use('/movies', moviesRoute);
/*** series ***/
router.use('/series', seriesRoute);
/*** login ***/
router.get('/login', passport.authenticate('github'), (req, res) => {});
/*** logout ***/
router.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

/************************/
/*** EXPORTS ***/
/************************/
module.exports = router;
