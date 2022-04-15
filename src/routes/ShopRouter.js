const express = require('express');
const { ShopController } = require('../controllers/index');

const router = express.Router();

router.post('/', ShopController.create);
router.get('/', ShopController.getAll);
router.get('/:id', ShopController.getOne);
router.delete('/:id', ShopController.deleteOne);
module.exports = router;