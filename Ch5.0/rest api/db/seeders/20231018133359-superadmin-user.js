'use strict';

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcryptjs')
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users', [{
      name : 'Andi Surya Priyadi',
      email : 'andisurya@gmail.com', 
      encryptPassword : bcrypt.hashSync('superadmin123', 10),
      phoneNumber : '08666666666',
      address : 'Pandeglang',
      role : 'SUPERADMIN',
      createdAt : new Date(),
      updatedAt : new Date(),
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
