/****************************/
/*** REQUIRE STATEMENTS ***/
/****************************/
const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

/****************************/
/*** GET ALL MOVIES ***/
/****************************/
const getAllMovies = async (req, res) => {
  const result = await mongodb.getDatabase().db().collection('movies').find();
  result.toArray().then((movies) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(movies);
  });
};

/****************************/
/*** GET A SINGLE MOVIE BY ID ***/
/****************************/
const getSingleMovieById = async (req, res) => {
  const movieId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDatabase()
    .db()
    .collection('movies')
    .find({ _id: movieId });
  result.toArray().then((movies) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(movies[0]);
  });
};

/****************************/
/*** CREATE MOVIE ***/
/****************************/
// const createMovie = async (req, res) => {
//   const movie = {
//     name: req.body.name,
//     description: req.body.description,
//     main_genre: req.body.main_genre,
//     year: req.body.year,
//     duration_min: req.body.duration_min,
//     director: req.body.director,
//     rating: req.body.rating,
//   };
//   const response = await mongodb
//     .getDatabase()
//     .db()
//     .collection('movies')
//     .insertOne(movie);

//   if (response.acknowledged) {
//     res.status(204).send();
//   } else {
//     res
//       .status(500)
//       .json(response.error || 'Some error ocurred while creating the movie.');
//   }
// };

/************************/
/*** EXPORTS ***/
/************************/
module.exports = {
  getAllMovies,
  getSingleMovieById,
  // createMovie,
};
