const { isValidEmail, isValidPassword, isValidUsername } = require('../helpers/index');

module.exports = function (...fields) {
  return function (req, res, next) {
    let errors = [];
    fields.forEach(field => {
      let value = req.body[field];
      switch (field) {
        case 'email':
          if (!isValidEmail(value) || !value) {
            errors.push('Email is invalid!');
          }
          break;
        case 'username':
          if (!isValidUsername(value) || !value) {
            errors.push('Username is invalid!');
          }
          break;
        case 'password':
          if (!isValidPassword(value) || !value) {
            errors.push('Password is invalid!');
          }
          break;
      }
    });
    if (errors.length !== 0) {
      return res.status(400).json({
        success: false,
        message: 'Registration failed!',
        errors: [...errors]
      });
    }
    next();
  };
};