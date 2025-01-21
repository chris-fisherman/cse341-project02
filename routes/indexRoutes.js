/************************/
/*** REQUIRE STATEMENTS ***/
/************************/
const express = require('express');
const router = express();

/************************/
/*** ROUTES ***/
/************************/
router.get('/', (req, res) => {
  res.send('Index route');
});

/************************/
/*** EXPORTS ***/
/************************/
module.exports = router;
