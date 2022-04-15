const express = require('express');
const { UserController } = require('../controllers/index');
const { Validator } = require('../middleware/index');

const router = express.Router();

router.post('/login', Validator('username', 'password'), UserController.login);
router.post('/register', Validator('username', 'password', 'email'), UserController.register);
router.post('/personal/:id', UserController.addPersonal);
router.put('/personal/:id', UserController.updatePersonal)

module.exports = router;