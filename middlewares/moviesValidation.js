/****************************/
/*** REQUIRE STATEMENTS ***/
/****************************/
const validator = require('../helpers/validatorHelper');

/****************************/
/*** VALIDATE CONTACT ***/
/****************************/
const validateMovie = (req, res, next) => {
  const validationRule = {
    name: 'required|string',
    description: 'required|string',
    main_genre: 'required|string',
    year: 'required|digits:4',
    duration_min: 'required|integer',
    director: 'required|string',
    rating: 'required|numeric|max:10',
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err,
      });
    } else {
      next();
    }
  });
};

/****************************/
/*** EXPORTS ***/
/****************************/
module.exports = {
  validateMovie,
};
