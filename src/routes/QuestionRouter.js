const express = require('express');
const { QuestionController } = require('../controllers/index');

const router = express.Router();

router.get('/', QuestionController.getAll);
router.get('/:id', QuestionController.getOne);
router.post('/', QuestionController.create);
router.delete('/:id', QuestionController.deleteOne);
router.put('/:id', QuestionController.update);
module.exports = router;