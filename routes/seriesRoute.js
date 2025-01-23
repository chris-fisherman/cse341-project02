/************************/
/*** REQUIRE STATEMENTS ***/
/************************/
const express = require('express');
const router = express();
const seriesController = require('../controllers/seriesController');
const seriesValidation = require('../middlewares/seriesValidation');

/****************************/
/*** ROUTES ***/
/****************************/
/*** get all series ***/
router.get('/', seriesController.getAllSeries);
/*** get single serie by its id ***/
router.get('/:id', seriesController.getSingleSerieById);
/*** create serie ***/
router.post('/', seriesValidation.validateSerie, seriesController.createSerie);
/*** update serie ***/
router.put(
  '/:id',
  seriesValidation.validateSerie,
  seriesController.updateSerie
);
/*** delete movie ***/
router.delete('/:id', seriesController.deleteSerie);

/************************/
/*** EXPORTS ***/
/************************/
module.exports = router;
