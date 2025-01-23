/****************************/
/*** REQUIRE STATEMENTS ***/
/****************************/
const validator = require('../helpers/validatorHelper');

/****************************/
/*** VALIDATE SERIE ***/
/****************************/
const validateSerie = (req, res, next) => {
  const validationRule = {
    name: 'required|string',
    description: 'required|string',
    year_publication: 'required|digits:4',
    seasons: 'required|integer',
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
  validateSerie,
};
