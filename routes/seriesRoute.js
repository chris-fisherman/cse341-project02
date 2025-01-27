/************************/
/*** REQUIRE STATEMENTS ***/
/************************/
const express = require('express');
const router = express();
const seriesController = require('../controllers/seriesController');
const seriesValidation = require('../middlewares/seriesValidation');
const { isAuthenticated } = require('../middlewares/authentication');

/****************************/
/*** ROUTES ***/
/****************************/
/*** get all series ***/
router.get('/', seriesController.getAllSeries);
/*** get single serie by its id ***/
router.get('/:id', seriesController.getSingleSerieById);
/*** create serie ***/
router.post(
  '/',
  isAuthenticated,
  seriesValidation.validateSerie,
  seriesController.createSerie
);
/*** update serie ***/
router.put(
  '/:id',
  isAuthenticated,
  seriesValidation.validateSerie,
  seriesController.updateSerie
);
/*** delete movie ***/
router.delete('/:id', isAuthenticated, seriesController.deleteSerie);

/************************/
/*** EXPORTS ***/
/************************/
module.exports = router;
