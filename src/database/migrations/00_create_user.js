import Knex from 'knex';

export async function up(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('cpf').notNullable();
        table.string('celular').notNullable();
    });
}

export async function down(knex) {
    return knex.schema.dropTable('users');
}