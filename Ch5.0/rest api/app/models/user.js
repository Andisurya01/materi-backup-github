'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Feeds, {
        foreignKey: "createdBy",
        as: "created"
      })
      this.hasMany(models.Feeds, {
        foreignKey: "updatedBy",
        as: "updated"
      })
      this.hasMany(models.Feeds, {
        foreignKey: "deletedBy",
        as: "deleted"
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true,
      }
    },
    encryptedPassword: {
      type : DataTypes.STRING,
      allowNull : false
    },
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING,
    role : {
      type : DataTypes.ENUM('MEMBER', 'ADMIN', 'SUPERADMIN'),
      allowNull : false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate(User => User.id = uuidv4())
  return User;
};