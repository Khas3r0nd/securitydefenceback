const path = require('path');
const { Shop } = require('../database/index');
const uuid = require('uuid');

class ShopController {
  async getAll(req, res) {
    try {
      const products = await Shop.getAll();
      res.json({
        success: true,
        message: 'Successfully retrieved products list!',
        amount: products.length,
        data: products
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred while getting products list!',
        errors: [error.message]
      });
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const product = await Shop.getById(id);
      res.json({
        success: true,
        message: 'Successfully retrieved one product!',
        data: product
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred while getting products list!',
        errors: [error.message]
      });
    }
  }

  
  async deleteOne(req, res) {
    try {
      const { id } = req.params;
      const product = await Shop.deleteById(id);
      res.json({
        success: true,
        message: 'Successfully deleted one product!',
        data: product
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred while getting products list!',
        errors: [error.message]
      });
    }
  }

  async create(req, res) {
    try {
      const { name, description, price, is_available = true } = req.body;
      const { img } = req.files;
      console.log("Image " + img.name);
      let fileName = `${uuid.v4()}${img.name}`;
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
      const newProduct = await Shop.create({ name, description, price, is_available, fileName });
      res.json({
        success: true,
        message: 'Successfully added product to database!',
        data: newProduct
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred while inserting product to database!',
        errors: [error.message]
      });
    }
  }
}

module.exports = new ShopController();