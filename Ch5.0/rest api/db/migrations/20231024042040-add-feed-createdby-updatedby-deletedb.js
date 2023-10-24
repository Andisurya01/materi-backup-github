'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Feeds', 'createdBy', {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: "ecad9b65-bcb4-486c-b656-f86e985b560a",
      references: {
        key: "id",
        model: "Users"
      }
    }),
      await queryInterface.addColumn('Feeds', 'updatedBy', {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          key: "id",
          model: "Users"
        }
      }),
      await queryInterface.addColumn('Feeds', 'deletedBy', {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          key: "id",
          model: "Users"
        }
      });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
