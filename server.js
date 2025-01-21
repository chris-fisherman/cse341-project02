/************************/
/*** REQUIRE STATEMENTS ***/
/************************/
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const indexRoutes = require('./routes/indexRoutes');

/************************/
/*** ROUTES ***/
/************************/
app.get('/', indexRoutes);

/************************/
/*** LISTEN PORT ***/
/************************/
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
