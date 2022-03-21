'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.addColumn('Organizations', 'facebook', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn('Organizations', 'twitter', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn('Organizations', 'vimeo', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn('Organizations', 'linkedin', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn('Organizations', 'flickr', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn('Organizations', 'youtube', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
    ])
  },

  async down (queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.removeColumn('Organizations', 'facebook'),
      queryInterface.removeColumn('Organizations', 'twitter'),
      queryInterface.removeColumn('Organizations', 'vimeo'),
      queryInterface.removeColumn('Organizations', 'linkedin'),
      queryInterface.removeColumn('Organizations', 'flickr'),
      queryInterface.removeColumn('Organizations', 'youtube'),
    ]);
  }
};
