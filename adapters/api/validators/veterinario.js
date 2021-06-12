const { check, validationResult } = require('express-validator');

exports.validateRequest = (req) => {
  const result = validationResult(req);
  return result.errors;
};

exports.registerValidator = () => [
  check('nome')
    .notEmpty()
    .withMessage('name is required'),
  check('crmv')
    .notEmpty()
    .withMessage('crmv is required')
    .isLength({ max: 30 })
    .withMessage('crmv must have less then 30 characters'), 
  check('cpf')
    .notEmpty()
    .withMessage('cpf is required')
    .isLength({ max: 11 })
    .withMessage('document must have 11 characters'), 
  check('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email'),
  check('telefone')
    .optional()
    .custom((val) => /^\([0-9]{2}\)\s?[0-9]{4,5}-[0-9]{4}$/g.test(val))
    .withMessage('invalid phone format'),

];

exports.updateValidator = () => [
check('nome')
  .notEmpty()
  .withMessage('name is required'),
check('crmv')
  .notEmpty()
  .withMessage('crmv is required')
  .isLength({ max: 30 })
  .withMessage('crmv must have less then 30 characters'), 
check('cpf')
  .notEmpty()
  .withMessage('cpf is required')
  .isLength({ max: 11 })
  .withMessage('document must have 11 characters'), 
check('email')
  .notEmpty()
  .withMessage('email is required')
  .isEmail()
  .withMessage('invalid email'),
check('telefone')
  .optional()
  .custom((val) => /^\([0-9]{2}\)\s?[0-9]{4,5}-[0-9]{4}$/g.test(val))
  .withMessage('invalid phone format'),

];
