const { check, validationResult } = require('express-validator');

exports.validateRequest = (req) => {
  const result = validationResult(req);
  return result.errors;
};

exports.registerValidator = () => [
  check('cat_image').notEmpty().withMessage('image is required'),

  check('tipo')
    .notEmpty()
    .withMessage('tipo is required')
    .isLength({ max: 50 })
    .withMessage('description must have less then 50 characters'),

  check('name').notEmpty().withMessage('name is required'),

  check('status').notEmpty().withMessage('status is required'),

  check('possuiDeficiencia')
    .notEmpty()
    .withMessage('possuiDeficiencia is required'),

  check('cuidadosEspeciais')
    .notEmpty()
    .withMessage('cuidadosEspeciais is required'),

  check('corPelagem').notEmpty().withMessage('corPelagem is required'),

  check('sexo').notEmpty().withMessage('sexo is required'),

  check('idade').notEmpty().withMessage('idade is required'),

  check('castrado').notEmpty().withMessage('castrado is required'),

  check('teste').notEmpty().withMessage('teste is required'),

  check('vacinas').notEmpty().withMessage('vacinas is required'),
];
