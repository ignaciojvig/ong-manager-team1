const { check, validationResult } = require('express-validator');

exports.validateRequest = (req) => {
  const result = validationResult(req);
  return result.errors;
};

exports.registerValidator = () => [
  check('username')
    .notEmpty()
    .withMessage('username is required'),
    check('name')
    .notEmpty()
    .withMessage('name is required'),
  check('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email'),
  check('password')
    .notEmpty()
    .withMessage('password is required'),
];

exports.updateValidator = () => [
    check('username')
      .notEmpty()
      .withMessage('username is required'),
      check('name')
      .notEmpty()
      .withMessage('name is required'),
    check('email')
      .notEmpty()
      .withMessage('email is required')
      .isEmail()
      .withMessage('invalid email'),
    check('password')
      .notEmpty()
      .withMessage('password is required'),
  ];
