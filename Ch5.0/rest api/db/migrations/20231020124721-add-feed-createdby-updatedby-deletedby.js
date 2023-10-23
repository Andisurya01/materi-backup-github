'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Feeds', 'createdBy',{
      type : Sequelize.INTEGER,
      allowNull : false,
      defaultValue : "2",
      references : {
        key: "id",
        model : "Users"
      }
    }),
    await queryInterface.addColumn('Feeds', 'updatedBy',{
      type : Sequelize.INTEGER,
      allowNull : true,
      references : {
        key: "id",
        model : "Users"
      }
    }),
    await queryInterface.addColumn('Feeds', 'deletedBy',{
      type : Sequelize.INTEGER,
      allowNull : true,
      references : {
        key: "id",
        model : "Users"
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
