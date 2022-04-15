const express = require('express');
const { VacancyController } = require('../controllers/index');

const router = express.Router();

router.get('/', VacancyController.getAll);
router.get('/:id', VacancyController.getOne);
router.post('/', VacancyController.create);
router.delete('/:id', VacancyController.delete);
router.put('/:id', VacancyController.update)

module.exports = router;