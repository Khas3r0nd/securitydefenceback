const express = require('express');
const { AnswerController } = require('../controllers/index');

const router = express.Router();

router.get('/:questionId', AnswerController.getAll);
router.post('/', AnswerController.create);

module.exports = router;