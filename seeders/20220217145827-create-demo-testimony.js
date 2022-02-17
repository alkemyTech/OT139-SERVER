'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Testimonies',
      [
        {
          name: 'John Doe',
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          phone: '+541191919191',
          address: 'Fake Street 123',
          welcomeText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie interdum rutrum. Nulla luctus est eget feugiat condimentum. Integer tempor eros tincidunt massa pretium',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
