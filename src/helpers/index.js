const error = require('./error');
const { isValidEmail, isValidPassword, isValidUsername } = require('./validation');

module.exports = {
  isValidEmail,
  isValidUsername,
  isValidPassword,
  error,
};