/************************/
/*** REQUIRE STATEMENTS ***/
/************************/
const express = require('express');
const router = express();
const moviesRoute = require('./moviesRoute');
const swaggerRoute = require('./swaggerRoute');

/************************/
/*** ROUTES ***/
/************************/
/*** swagger - api documentation ***/
router.use('/', swaggerRoute);
/*** index ***/
router.get('/', (req, res) => {
  //#swagger.tags=['Index route']
  res.send('Index route');
});
/*** movies ***/
router.use('/movies', moviesRoute);

/************************/
/*** EXPORTS ***/
/************************/
module.exports = router;
