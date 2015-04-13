'use strict';

exports.up = function(knex, Promise) {
   return knex.schema.createTable('tools', function (table) {
    table.integer('id').primary();
    table.string('name');
    table.string('name_slug');
    table.string('purpose');
    table.string('homepage_url');
    table.string('submitter_username');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tools');
};
