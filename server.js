/************************/
/*** REQUIRE STATEMENTS ***/
/************************/
/* dependencies */
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const GitHubStrategy = require('passport-github2').Strategy;
const cors = require('cors');
/* files */
const indexRoutes = require('./routes/indexRoutes');
const mongodb = require('./data/database');
/* app */
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();

/****************************/
/*** USES ***/
/****************************/
app
  .use(bodyParser.json())
  .use(
    session({
      secret: 'secret',
      resave: false,
      saveUninitialized: true,
    })
  )
  .use(passport.initialize())
  .use(passport.session())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    );
    next();
  })
  .use(cors({ methods: ['GET', 'POST', 'PUT', 'DELETE', 'UPDATE', 'PATCH'] }))
  .use(cors({ origin: '*' }));

/************************/
/*** ROUTES ***/
/************************/
app.use('/', indexRoutes);

/************************/
/*** MIDDLEWARES ***/
/************************/
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

/************************/
/*** LOGGING ROUTES ***/
/************************/
app.get('/', (req, res) => {
  res.send(
    req.session.user !== undefined
      ? `Log in as ${req.session.user.displayName}`
      : `Logged Out`
  );
});
app.get(
  '/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/api-docs',
    session: false,
  }),
  (req, res) => {
    req.session.user = req.user;
    res.redirect('/');
  }
);

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
