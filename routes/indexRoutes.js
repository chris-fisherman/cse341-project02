/************************/
/*** REQUIRE STATEMENTS ***/
/************************/
const express = require('express');
const router = express();
const moviesRoute = require('./moviesRoute');
const seriesRoute = require('./seriesRoute');
const swaggerRoute = require('./swaggerRoute');

/************************/
/*** ROUTES ***/
/************************/
/*** swagger - api documentation ***/
router.use('/', swaggerRoute);
/*** index ***/
router.get('/', (req, res) => {
  //#swagger.tags=['Index route']
  res.send('Movies and series API Index');
});
/*** movies ***/
router.use('/movies', moviesRoute);
/*** series ***/
router.use('/series', seriesRoute);

/************************/
/*** EXPORTS ***/
/************************/
module.exports = router;
