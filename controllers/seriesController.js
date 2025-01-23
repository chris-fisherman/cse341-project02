/****************************/
/*** REQUIRE STATEMENTS ***/
/****************************/
const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

/****************************/
/*** GET ALL SERIES ***/
/****************************/
const getAllSeries = async (req, res) => {
  //#swagger.tags=['Series']
  const result = await mongodb.getDatabase().db().collection('series').find();
  result.toArray().then((series) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(series);
  });
};

/****************************/
/*** GET A SINGLE SERIE BY ID ***/
/****************************/
const getSingleSerieById = async (req, res) => {
  //#swagger.tags=['Series']
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid serie id to find a serie.');
  }
  const serieId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDatabase()
    .db()
    .collection('series')
    .find({ _id: serieId });
  result.toArray().then((series) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(series[0]);
  });
};

/****************************/
/*** CREATE SERIE ***/
/****************************/
const createSerie = async (req, res) => {
  //#swagger.tags=['Series']
  const serie = {
    name: req.body.name,
    description: req.body.description,
    year_publication: req.body.year_publication,
    seasons: req.body.seasons,
  };
  const response = await mongodb
    .getDatabase()
    .db()
    .collection('series')
    .insertOne(serie);

  if (response.acknowledged) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || 'Some error ocurred while creating the serie.');
  }
};

/****************************/
/*** UPDATE SERIE ***/
/****************************/
const updateSerie = async (req, res) => {
  //#swagger.tags=['Series']
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid serie id to update a serie.');
  }
  const serieId = new ObjectId(req.params.id);
  const serie = {
    name: req.body.name,
    description: req.body.description,
    year_publication: req.body.year_publication,
    seasons: req.body.seasons,
  };
  const response = await mongodb
    .getDatabase()
    .db()
    .collection('series')
    .replaceOne({ _id: serieId }, serie);

  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || 'Some error ocurred while updating the serie.');
  }
};

/****************************/
/*** DELETE SERIE ***/
/****************************/
const deleteSerie = async (req, res) => {
  //#swagger.tags=['Series']
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid serie id to delete a serie.');
  }
  const serieId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDatabase()
    .db()
    .collection('series')
    .deleteOne({ _id: serieId });

  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || 'Some error ocurred while deleting the serie.');
  }
};

/************************/
/*** EXPORTS ***/
/************************/
module.exports = {
  getAllSeries,
  getSingleSerieById,
  createSerie,
  updateSerie,
  deleteSerie,
};
