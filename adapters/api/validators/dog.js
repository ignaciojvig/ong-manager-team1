const { check, validationResult } = require('express-validator');

exports.validateRequest = (req) => {
  const result = validationResult(req);
  return result.errors;
};

exports.registerValidator = () => [
  check('nome')
    .notEmpty()
    .withMessage('name is required'),
  check('tipo')
    .notEmpty()
    .withMessage('type is required')
    .isLength({ max: 20 })
    .withMessage('type must have less then 20 characters'),
  check('possuiDeficiencia')
    .notEmpty()
    .withMessage('has a disability is required'),
  check('cuidadosEspeciais')
    .notEmpty()
    .withMessage('special care is required'),

];

exports.updateValidator = () => [
    check('nome')
    .notEmpty()
    .withMessage('name is required'),
  check('tipo')
    .notEmpty()
    .withMessage('type is required')
    .isLength({ max: 20 })
    .withMessage('type must have less then 20 characters'),
  check('possuiDeficiencia')
    .notEmpty()
    .withMessage('has a disability is required'),
  check('cuidadosEspeciais')
    .notEmpty()
    .withMessage('special care is required'),

];
