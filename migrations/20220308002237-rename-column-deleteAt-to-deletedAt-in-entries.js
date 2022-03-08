'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.renameColumn('entries', 'deleteAt', 'deletedAt');
  },
  
  async down (queryInterface, Sequelize) {
    return queryInterface.renameColumn('entries', 'deletedAt', 'deleteAt');
  }
};
