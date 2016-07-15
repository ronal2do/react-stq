exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments();
      table.string('name');
      table.string('email').unique();
      table.string('password');
      table.string('passwordResetToken');
      table.dateTime('passwordResetExpires');
      table.string('gender');
      table.string('location');
      table.string('website');
      table.string('picture');
      table.string('facebook');
      table.string('twitter');
      table.string('google');
      table.string('vk');
      table.timestamps();
    }),
    knex.schema.createTable('posts', function(table){
        table.increments('id').primary();
        table.string('title');
        table.string('body');
        table.integer('author_id')
             .references('uid')
             .inTable('users');
        table.dateTime('postDate');
    }),

    knex.schema.createTable('comments', function(table){
        table.increments('id').primary();
        table.string('body');
        table.integer('author_id')
             .references('uid')
             .inTable('users');
        table.integer('post_id')
             .references('id')
             .inTable('posts');
        table.dateTime('postDate');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('posts'),
    knex.schema.dropTable('comments')
  ])
};
