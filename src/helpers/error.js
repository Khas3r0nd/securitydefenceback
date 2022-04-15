module.exports = function (statusCode, message) {
  return function (req, res) {
    res.status(statusCode).json({message});
  }
}