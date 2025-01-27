/************************/
/*** REQUIRE STATEMENTS ***/
/************************/
const express = require('express');
const router = express();
const moviesController = require('../controllers/moviesController');
const moviesValidation = require('../middlewares/moviesValidation');
const { isAuthenticated } = require('../middlewares/authentication');

/****************************/
/*** ROUTES ***/
/****************************/
/*** get all movies ***/
router.get('/', moviesController.getAllMovies);
/*** get single movie by its id ***/
router.get('/:id', moviesController.getSingleMovieById);
/*** create movie ***/
router.post(
  '/',
  isAuthenticated,
  moviesValidation.validateMovie,
  moviesController.createMovie
);
/*** update movie ***/
router.put(
  '/:id',
  isAuthenticated,
  moviesValidation.validateMovie,
  moviesController.updateMovie
);
/*** delete movie ***/
router.delete('/:id', isAuthenticated, moviesController.deleteMovie);

/************************/
/*** EXPORTS ***/
/************************/
module.exports = router;
