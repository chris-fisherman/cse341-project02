/************************/
/*** REQUIRE STATEMENTS ***/
/************************/
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const indexRoutes = require('./routes/indexRoutes');
const mongodb = require('./data/database');

/************************/
/*** ROUTES ***/
/************************/
app.get('/', indexRoutes);

/************************/
/*** LISTEN PORT ***/
/************************/
mongodb.initDb((error) => {
  if (error) {
    console.log(error);
  } else {
    app.listen(port, () => {
      console.log(`Database is listening and node running on port ${port}`);
    });
  }
});
