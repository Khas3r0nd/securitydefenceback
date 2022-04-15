module.exports = class VacancyQuery {
  constructor(connection) {
    this.connection = connection;
  }

  async getById(id) {
    const sql = 'SELECT * FROM vacancy WHERE id=$1';
    const vacancy = await this.connection.query(sql, [id]);
    return vacancy.rows[0];
  }

  async getAll() {
    const sql = 'SELECT * FROM vacancy ORDER BY updated_at DESC';
    const vacancies = await this.connection.query(sql);
    return vacancies.rows;
  }

  async delete(id) {
    const sql = 'DELETE FROM vacancy WHERE id=$1';
    const vacancy = await this.connection.query(sql, [id]);
    return vacancy.rows[0];
  }

  async update(id, vacancy) {
    const sql = `UPDATE vacancy SET
    is_internship=$1,
    is_fulltime=$2,
    is_remote=$3,
    experience=$4,
    title=$5,
    description=$6,
    location=$7,
    salary_min=$8,
    salary_max=$9,
    updated_at=$10
    WHERE id=$11`;
    const updatedVacancy = await this.connection.query(sql, [
      vacancy.is_internship,
      vacancy.is_fulltime,
      vacancy.is_remote,
      vacancy.experience,
      vacancy.title,
      vacancy.description,
      vacancy.location,
      vacancy.salary_min,
      vacancy.salary_max,
      new Date().toISOString(),
      id
    ]);
    return updatedVacancy.rows[0];
  }

  async create(vacancy) {
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
    } = vacancy;
    const sql = `insert into vacancy
        (is_internship, is_fulltime, is_remote, is_visible, experience, title,
        description, location, salary_min, salary_max, user_id, created_at, updated_at)
        values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *`;
    const date = new Date().toISOString();
    const data = [is_internship, is_fulltime, is_remote, is_visible, experience, title,
      description, location, salary_min, salary_max, user_id, date, date];
    const newVacancy = await this.connection.query(sql, data);
    return newVacancy.rows[0];
  }
};