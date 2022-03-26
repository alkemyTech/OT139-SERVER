'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Organizations', [{
      id: 1,
      name: 'Somos Mas',
      image: '/images/LOGO-SOMOS-MAS.png',
      phone: '1160112988',
      address: 'Barrio La Cava',
      welcomeText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie interdum rutrum. Nulla luctus est eget feugiat condimentum.',
      createdAt: new Date,
      updatedAt: new Date,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Organizations', { id: 1 });
  }
};
