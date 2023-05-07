const knex = require("../knex");

class Quiz_attempt {
  constructor({ id, ben_score, carmen_score, motun_score, outcome, user_id, quiz_id }) {
    this.id = id;
    this.ben_score = ben_score;
    this.carmen_score = carmen_score;
    this.motun_score = motun_score;
    this.outcome = outcome;
    this.user_id = user_id;
    this.quiz_id = quiz_id;
  }

  static async createAttempt(id, ben_score,carmen_score, motun_score,outcome,user_id, quiz_id) {
    try {
      const query = `INSERT INTO quiz_attempt (id, ben_score,carmen_score, motun_score,outcome,user_id, quiz_id)
        VALUES (?, ?, ?, ?, ?, ? , ?) RETURNING *`;
      const {
        rows: [attempt],
      } = await knex.raw(query, [id, ben_score,carmen_score, motun_score,outcome,user_id, quiz_id]);
      return new Quiz_attempt(attempt);
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async viewQuizAttempt() {
    try {
      const query = "SELECT * FROM quiz_attempt";
      const { rows } = await knex.raw(query);
      return rows.map((attempt) => new Quiz_attempt(attempt));
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  static async viewQuizAttemptByID(id) {
    try {
      const query = 'SELECT * FROM quiz_attempt WHERE id = ?';
      const { rows: [attempt] } = await knex.raw(query, [id]);
      return attempt ? new Quiz_attempt(attempt) : null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  
}

module.exports = Quiz_attempt;
