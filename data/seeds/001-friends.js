
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('friends').del()
    .then(function () {
      // Inserts seed entries
      return knex('friends').insert([
        { name: 'Quinn' },
        { name: 'Colby' },
        { name: 'Ben' },
        { name: 'Chase' }
      ]);
    });
};
