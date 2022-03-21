'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkUpdate('Organizations', {
      facebook: 'https://www.facebook.com/corpsomosmas',
      twitter: 'https://twitter.com/somosmas',
      vimeo: 'https://vimeo.com/somosmas',
      linkedin: 'https://www.linkedin.com/company/somosmas/',
      flickr: 'https://www.flickr.com/photos/corporacionsomosmas/albums',
      youtube: 'https://www.youtube.com/user/corposomosmas',
    }, { id: 1 });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkUpdate('Organizations', {
      facebook: null,
      twitter: null,
      vimeo: null,
      linkedin: null,
      flickr: null,
      youtube: null,
    }, { id: 1 });
  }
};
