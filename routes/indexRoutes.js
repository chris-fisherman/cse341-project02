/************************/
/*** REQUIRE STATEMENTS ***/
/************************/
const express = require('express');
const router = express();
const moviesRoute = require('./moviesRoute');

/************************/
/*** ROUTES ***/
/************************/
/*** index ***/
router.get('/', (req, res) => {
  res.send('Index route');
});
/*** movies ***/
router.use('/movies', moviesRoute);

/************************/
/*** EXPORTS ***/
/************************/
module.exports = router;
