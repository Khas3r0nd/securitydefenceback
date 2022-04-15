module.exports = class UserQuery {
  constructor(connection) {
    this.connection = connection;
  }

  async getByUsername(username) {
    const sql = 'SELECT * FROM user_account WHERE username = $1';
    let user = await this.connection.query(sql, [username]);
    return user.rows[0];
  }

  async getByEmail(email) {
    const sql = 'SELECT * FROM user_account WHERE email = $1';
    let user = await this.connection.query(sql, [email]);
    return user.rows[0];
  }

  async register(user) {
    const { username, email, password, user_type_id } = user;
    const sql = 'INSERT INTO user_account (username, email, password, created_at, updated_at, user_type_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const date = new Date().toISOString();
    const data = [username, email, password, date, date, user_type_id];
    const newUser = await this.connection.query(sql, data);
    return newUser.rows[0];
  }

  async addPersonalInfo(info) {
    const {
      first_name,
      second_name,
      middle_name,
      date_of_birth,
      user_id
    } = info;
    const sql = `
        INSERT INTO personal_info 
        (first_name, second_name, middle_name, date_of_birth,user_id, created_at, updated_at) 
        values ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
    const date = new Date().toISOString();
    const data = [
      first_name,
      second_name,
      middle_name,
      date_of_birth,
      user_id,
      date,
      date
    ];
    const newPersonalInfo = await this.connection.query(sql, data);
    return newPersonalInfo.rows[0];
  }

  async update(id, info) {
    const sql = 'UPDATE personal_info SET first_name=$1, second_name=$2, middle_name=$3, date_of_birth=$4, updated_at=$5 WHERE user_id=$6';
    const newPersonalInfo = await this.connection.query(sql, [
      info.first_name,
      info.second_name,
      info.middle_name,
      info.date_of_birth,
      new Date().toISOString(),
      id
    ]);
    return newPersonalInfo.rows[0];
  }

  async getPersonalInfo(user_id) {
    const sql = 'SELECT * FROM personal_info WHERE user_id = $1';
    const personalInfo = await this.connection.query(sql, [user_id]);
    return personalInfo.rows[0];
  }
}