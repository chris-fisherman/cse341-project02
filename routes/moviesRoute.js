/************************/
/*** REQUIRE STATEMENTS ***/
/************************/
const express = require('express');
const router = express();
const moviesController = require('../controllers/moviesController');

/****************************/
/*** ROUTES ***/
/****************************/
/*** get all movies ***/
router.get('/', moviesController.getAllMovies);
/*** get single movie by its id ***/
router.get('/:id', moviesController.getSingleMovieById);
/*** create movie ***/
router.post('/', moviesController.createMovie);
/*** update movie ***/
router.put('/:id', moviesController.updateMovie);
/*** delete movie ***/
router.delete('/:id', moviesController.deleteMovie);

/************************/
/*** EXPORTS ***/
/************************/
module.exports = router;
