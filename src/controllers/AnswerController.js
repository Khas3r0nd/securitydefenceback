const { Answer } = require('../database/index');

class AnswerController {
  async getAll(req, res) {
    try {
      const { questionId } = req.params;
      const answers = await Answer.getAll(questionId);
      res.json({
        success: true,
        message: 'Successfully retrieved answers list!',
        amount: answers.length,
        data: answers
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred while getting answers list!',
        errors: [error.message]
      });
    }
  }

  async create(req, res) {
    try {
      const { question_id, user_id, text } = req.body;
      const newAnswer = await Answer.create({ question_id, user_id, text });
      res.json({
        success: true,
        message: 'Successfully added answer to the database!',
        data: newAnswer
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred while adding answer to the database!',
        errors: [error.message]
      });
    }
  }
}

module.exports = new AnswerController();