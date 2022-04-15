const { Vacancy } = require('../database/index');

class VacancyController {
  async getAll(req, res) {
    try {
      const vacancies = await Vacancy.getAll();
      res.json({
        success: true,
        message: 'Successfully retrieved vacancies list!',
        amount: vacancies.length,
        data: vacancies
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred while getting list of vacancies!',
        errors: [error.message]
      });
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const vacancy = await Vacancy.getById(id);
      res.json({
        success: true,
        message: 'Successfully retrieved one vacancy!',
        data: vacancy
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred while vacancy!',
        errors: [error.message]
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const vacancy = await Vacancy.delete(id);
      res.json({
        success: true,
        message: 'Successfully deleted one vacancy!',
        data: vacancy
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred while vacancy!',
        errors: [error.message]
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const vacancy = await Vacancy.update(id, req.body);
      res.json({
        success: true,
        message: 'Successfully updated one vacancy!',
        data: vacancy
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred while vacancy!',
        errors: [error.message]
      });
    }
  }

  async create(req, res) {
    try {
      const {
        is_internship,
        is_fulltime,
        is_remote,
        is_visible = true,
        user_id,
        experience,
        title,
        description,
        location,
        salary_min,
        salary_max
      } = req.body;
      const newVacancy = await Vacancy.create({
        is_internship,
        is_fulltime,
        is_remote,
        is_visible,
        user_id,
        experience,
        title,
        description,
        location,
        salary_min,
        salary_max
      });
      res.json({
        success: true,
        message: 'Vacancy successfully added!',
        data: newVacancy
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unknown error occurred while adding vacancy to the database!',
        errors: [error.message]
      });
    }
  }
}

module.exports = new VacancyController();