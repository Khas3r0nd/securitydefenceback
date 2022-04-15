function isValidUsername(username) {
  const usernameRegexp = /^[a-zA-Z0-9]{4,32}$/;
  return usernameRegexp.test(username);
}

function isValidPassword(password) {
  const passwordRegexp = /^[a-zA-Z0-9]{4,32}$/;
  return passwordRegexp.test(password);
}

function isValidEmail(email) {
  const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegexp.test(email);
}

module.exports = { isValidEmail, isValidUsername, isValidPassword };