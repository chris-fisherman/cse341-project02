/************************/
/*** REQUIRE STATEMENTS ***/
/************************/
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const indexRoutes = require('./routes/indexRoutes');
const mongodb = require('./data/database');
const bodyParser = require('body-parser');

/****************************/
/*** USES ***/
/****************************/
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  next();
});

/************************/
/*** ROUTES ***/
/************************/
app.use('/', indexRoutes);

/****************************/
/*** ERROR HANDLING ***/
/****************************/
process.on('uncaughtException', (err, origin) => {
  console.log(
    process.stderr.fd,
    `Caught exception: ${err}\n` + `Exception origin ${origin}`
  );
});

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
