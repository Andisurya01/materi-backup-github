'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feeds extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "createdBy",
        as: "created"
      })
      this.belongsTo(models.User, {
        foreignKey: "updatedBy",
        as: "updated"
      })
      this.belongsTo(models.User, {
        foreignKey: "deletedBy",
        as: "deleted"
      })
    }
  }
  Feeds.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Feeds',
  });
  return Feeds;
};