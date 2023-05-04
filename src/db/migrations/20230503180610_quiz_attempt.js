/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => { 
    return knex.schema.createTable('quiz_attempt', (table)=> {
        table.increments('id').primary();
        table.integer('ben_score').notNullable();
        table.integer('carmen_score').notNullable();
        table.integer('motun_score').notNullable();
        table.string('outcome').notNullable();
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
    return knex.schema.dropTable('quiz_attempt');
};
