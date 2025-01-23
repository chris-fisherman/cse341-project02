/************************/
/*** REQUIRE STATEMENTS ***/
/************************/
const express = require('express');
const router = express();
const seriesController = require('../controllers/seriesController');

/****************************/
/*** ROUTES ***/
/****************************/
/*** get all series ***/
router.get('/', seriesController.getAllSeries);
/*** get single serie by its id ***/
router.get('/:id', seriesController.getSingleSerieById);
/*** create serie ***/
router.post('/', seriesController.createSerie);
/*** update serie ***/
router.put('/:id', seriesController.updateSerie);
/*** delete movie ***/
router.delete('/:id', seriesController.deleteSerie);

/************************/
/*** EXPORTS ***/
/************************/
module.exports = router;
