const knex = require('../knex');

class Reaction {
  constructor({ id, reaction_text, user_id, quiz_id }) {
    this.id = id;
    this.reaction_text = reaction_text;
    this.user_id = user_id;
    this.quiz_id = quiz_id;
  }

  static async create(reaction_text, user_id, quiz_id) {
    try {
      const query = `INSERT INTO reactions (reaction_text, user_id, quiz_id)
        VALUES (?, ?, ?) RETURNING *`;
      const {
        rows: [reaction],
      } = await knex.raw(query, [reaction_text, user_id, quiz_id]);
      return new Reaction(reaction);
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async list() {
    try {
      const query = "SELECT * FROM reactions";
      const { rows } = await knex.raw(query);
      return rows.map((reaction) => new Reaction(reaction));
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async find(id) {
    try {
      const query = 'SELECT * FROM reactions WHERE id = ?';
      const { rows: [reaction] } = await knex.raw(query, [id]);
      return reaction ? new Reaction(reaction) : null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async update(reaction_text) {
    try {
      const [updatedReaction] = await knex('reactions')
        .where({ id: this.id })
        .update({ reaction_text })
        .returning('*');
      return updatedReaction ? new Reaction(updatedReaction) : null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async delete() {
    try {
      await knex('reactions').where({ id: this.id }).del();
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}

module.exports = Reaction;
