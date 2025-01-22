/****************************/
/*** REQUIRE STATEMENTS ***/
/****************************/
const swaggerAutogen = require('swagger-autogen')();

/****************************/
/*** VARIABLES ***/
/****************************/
const doc = {
  info: {
    title: 'Movies API',
    description:
      'This is a movies API documentation for project 02 of the CSE 341 Web Services course.',
  },
  host: 'localhost:3000',
  schemes: ['http', 'https'],
};
const outputFile = './swagger.json';
const endpointsFiles = ['./routes/indexRoutes.js'];

/****************************/
/*** GENERATE swagger.json ***/
/****************************/
swaggerAutogen(outputFile, endpointsFiles, doc);
