const { Question } = require('../database/index');

class QuestionController {
  async getAll(req, res) {
    try {
      const questions = await Question.getAll();
      res.json({
        success: true,
        message: 'Successfully retrieved questions list!',
        amount: questions.length,
        data: questions
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred while getting questions list!',
        errors: [error.message]
      });
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const question = await Question.getById(id);
      res.json({
        success: true,
        message: 'Successfully retrieved one question!',
        data: question
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred while getting question!',
        errors: [error.message]
      });
    }
  }
  async deleteOne(req, res) {
    try {
      const { id } = req.params;
      const product = await Question.deleteById(id);
      res.json({
        success: true,
        message: 'Successfully deleted one question!',
        data: product
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred while getting question list!',
        errors: [error.message]
      });
    }
  }

  async create(req, res) {
    try {
      const { title, text, user_id, difficulty } = req.body;
      const newQuestion = await Question.create({ title, text, user_id, difficulty });
      res.json({
        success: true,
        message: 'Successfully added question to database!',
        data: newQuestion
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred while inserting question to database!',
        errors: [error.message]
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const updateQuestion = await Question.update(id, req.body);
      res.json({
        success: true,
        message: 'Successfully updated question!',
        data: updateQuestion
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred while inserting question to database!',
        errors: [error.message]
      });
    }
  }
}

module.exports = new QuestionController();