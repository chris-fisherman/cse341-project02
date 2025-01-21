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
// /*** create movie ***/
// router.post('/', moviesController.createMovie);

/************************/
/*** EXPORTS ***/
/************************/
module.exports = router;
