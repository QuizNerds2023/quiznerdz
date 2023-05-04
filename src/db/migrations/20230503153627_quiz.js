/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => { 
return knex.schema.createTable('quiz', (table)=> {
    table.increments('id').primary();
    table.string('quiz_title').notNullable();
    table.string('quiz_description').notNullable();
 })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTable('quiz');
};
