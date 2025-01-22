/****************************/
/*** REQUIRE STATEMENTS ***/
/****************************/
const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

/****************************/
/*** ROUTES ***/
/****************************/
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

/****************************/
/*** EXPORTS ***/
/****************************/
module.exports = router;
