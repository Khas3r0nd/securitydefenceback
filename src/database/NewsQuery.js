module.exports = class NewsQuery {
  constructor(connection) {
    this.connection = connection;
  }

  async create(post) {
    const { author_id, title, content, is_visible } = post;
    const sql = `INSERT INTO post (author_id, title, content, is_visible, created_at, updated_at)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
    const date = new Date().toISOString();
    const newPost = await this.connection.query(sql, [
      author_id,
      title,
      content,
      is_visible || true,
      date,
      date
    ]);
    return newPost.rows[0];
  }

  async update(id, post) {
    const sql = 'UPDATE post SET title=$1, content=$2, updated_at=$3 WHERE id=$4';
    const updatePost = await this.connection.query(sql, [
      post.title,
      post.content,
      new Date().toISOString(),
      id
    ]);
    return updatePost.rows[0];
  }

  async getById(id) {
    const sql = 'SELECT * FROM post WHERE id = $1 LIMIT 1';
    const post = await this.connection.query(sql, [id]);
    return post.rows[0];
  }

  async getAll() {
    const sql = 'SELECT * FROM post ORDER BY updated_at DESC';
    const posts = await this.connection.query(sql);
    return posts.rows;
  }

  async deleteById(id) {
    const sql = 'DELETE FROM post WHERE id=$1';
    const posts = await this.connection.query(sql, [id]);
    return posts.rows[0];
  }

}