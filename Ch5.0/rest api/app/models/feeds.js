'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuidv4 } = require('uuid');
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
    paranoid : true
  });
  Feeds.beforeCreate(Feeds => Feeds.id = uuidv4())
  return Feeds;
};