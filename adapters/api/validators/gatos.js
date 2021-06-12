const { check, validationResult } = require('express-validator');

exports.validateRequest = (req) => {
  const result = validationResult(req);
  return result.errors;
};

exports.registerValidator = () => [

    check('tipo')
    .notEmpty()
    .withMessage('tipo is required'),

    check('name')
    .optional(),

    check('status')
    .optional(),

    check('possuiDeficiencia')
    .optional(),

    check('cuidadosEspeciais')
    .optional(),

    check('corPelagem')
    .notEmpty()
    .withMessage('corPelagem is required'),

    check('sexo')
    .notEmpty()
    .withMessage('sexo is required'),

    check('idade')
    .notEmpty()
    .withMessage('idade is required'),

    check('castrado')
    .notEmpty()
    .withMessage('castrado is required'),

    check('teste')
    .notEmpty()
    .withMessage('teste is required'),

    check('vacinas')
    .notEmpty()
    .withMessage('vacinas is required'),
];

exports.updateValidator = () => [
  check('tipo')
    .notEmpty()
    .withMessage('tipo is required'),

    check('name')
    .optional(),

    check('status')
    .optional(),

    check('possuiDeficiencia')
    .optional(),

    check('cuidadosEspeciais')
    .optional(),

    check('corPelagem')
    .notEmpty()
    .withMessage('corPelagem is required'),

    check('sexo')
    .notEmpty()
    .withMessage('sexo is required'),

    check('idade')
    .notEmpty()
    .withMessage('idade is required'),

    check('castrado')
    .notEmpty()
    .withMessage('castrado is required'),

    check('teste')
    .notEmpty()
    .withMessage('teste is required'),

    check('vacinas')
    .notEmpty()
    .withMessage('vacinas is required'),
];

exports.updateValidatorStatus = () => [
  check('status')
  .notEmpty(),

];
