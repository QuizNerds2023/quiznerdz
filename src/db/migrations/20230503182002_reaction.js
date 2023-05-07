/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable('reaction', (table)=> {
        table.increments('id').primary();
        table.string('reaction_text').notNullable();
        table.integer('user_id').notNullable();
        table.integer('quiz_id').notNullable();
        table.foreign('user_id').references('id').inTable('users');
        table.foreign('quiz_id').references('id').inTable('quiz');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTable('reaction');
};
