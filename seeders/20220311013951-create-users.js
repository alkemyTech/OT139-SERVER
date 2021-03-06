'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      {
        firstName: 'Usuario1',
        lastName: 'Demo1',
        email: 'test1@test.com',
        password:
          '$2a$12$dTxcoLjbEBeznoW/Kza./u18obz1swM8Om3DaaLtF.gQ7Jdi2voDG',
        roleId: 1,
        image: 'https://via.placeholder.com/150',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Usuario2',
        lastName: 'Demo2',
        email: 'test2@test.com',
        password:
          '$2a$12$KnpNSc/3oUD.LuJcvxi/2OSwuV.Ie/qKKmrgiTzYbdg7G9RvH9kLi',
        roleId: 1,
        image: 'https://via.placeholder.com/150',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Usuario3',
        lastName: 'Demo3',
        email: 'test3@test.com',
        password:
          '$2a$12$KnpNSc/3oUD.LuJcvxi/2OSwuV.Ie/qKKmrgiTzYbdg7G9RvH9kLi',
        roleId: 1,
        image: 'https://via.placeholder.com/150',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Usuario4',
        lastName: 'Demo4',
        email: 'test4@test.com',
        password:
          '$2a$12$KnpNSc/3oUD.LuJcvxi/2OSwuV.Ie/qKKmrgiTzYbdg7G9RvH9kLi',
        roleId: 1,
        image: 'https://via.placeholder.com/150',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Usuario5',
        lastName: 'Demo5',
        email: 'test5@test.com',
        password:
          '$2a$12$KnpNSc/3oUD.LuJcvxi/2OSwuV.Ie/qKKmrgiTzYbdg7G9RvH9kLi',
        roleId: 1,
        image: 'https://via.placeholder.com/150',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Usuario6',
        lastName: 'Demo6',
        email: 'test6@test.com',
        password:
          '$2a$12$KnpNSc/3oUD.LuJcvxi/2OSwuV.Ie/qKKmrgiTzYbdg7G9RvH9kLi',
        roleId: 2,
        image: 'https://via.placeholder.com/150',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Usuario7',
        lastName: 'Demo7',
        email: 'test7@test.com',
        password:
          '$2a$12$KnpNSc/3oUD.LuJcvxi/2OSwuV.Ie/qKKmrgiTzYbdg7G9RvH9kLi',
        roleId: 2,
        image: 'https://via.placeholder.com/150',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Usuario8',
        lastName: 'Demo8',
        email: 'test8@test.com',
        password:
          '$2a$12$KnpNSc/3oUD.LuJcvxi/2OSwuV.Ie/qKKmrgiTzYbdg7G9RvH9kLi',
        roleId: 2,
        image: 'https://via.placeholder.com/150',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Usuario9',
        lastName: 'Demo9',
        email: 'test9@test.com',
        password:
          '$2a$12$KnpNSc/3oUD.LuJcvxi/2OSwuV.Ie/qKKmrgiTzYbdg7G9RvH9kLi',
        roleId: 2,
        image: 'https://via.placeholder.com/150',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Usuario10',
        lastName: 'Demo10',
        email: 'test10@test.com',
        password:
          '$2a$12$KnpNSc/3oUD.LuJcvxi/2OSwuV.Ie/qKKmrgiTzYbdg7G9RvH9kLi',
        roleId: 2,
        image: 'https://via.placeholder.com/150',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Users', users, {});
  },

  async down(queryInterface, Sequelize) {},
};
