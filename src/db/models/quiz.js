const knex = require('../knex');

class Quiz {
  constructor({ id, quiz_title, quiz_description }) {
    this.id = id;
    this.quiz_title = quiz_title;
    this.quiz_description = quiz_description;
  }

  static async list() {
    try {
      const query = 'SELECT * FROM quiz';
      const { rows } = await knex.raw(query);
      return rows.map((quiz) => new Quiz(quiz));
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async find(id) {
    try {
      const query = 'SELECT * FROM quiz WHERE id = ?';
      const { rows: [quiz] } = await knex.raw(query, [id]);
      return quiz ? new Quiz(quiz) : null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async create({ quiz_title, quiz_description }) {
    try {
      const query = `INSERT INTO quiz (quiz_title, quiz_description)
        VALUES (?, ?) RETURNING *`;
      const { rows: [quiz] } = await knex.raw(query, [quiz_title, quiz_description]);
      return new Quiz(quiz);
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async deleteAll() {
    try {
      return knex.raw('TRUNCATE quiz;');
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async update({ quiz_title, quiz_description }) {
    try {
      const [updatedQuiz] = await knex('quiz')
        .where({ id: this.id })
        .update({ quiz_title, quiz_description })
        .returning('*');
      return updatedQuiz ? new Quiz(updatedQuiz) : null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async delete() {
    try {
      const query = 'DELETE FROM quiz WHERE id = ?';
      await knex.raw(query, [this.id]);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}

module.exports = Quiz;
