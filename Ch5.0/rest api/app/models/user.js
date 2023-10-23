'use strict';
const {
  Model, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Feeds, {
        foreignKey : "createdBy",
        as : "created"
      });
      this.hasMany(models.Feeds, {
        foreignKey : "updatedBy",
        as : "updated"
      });
      this.hasMany(models.Feeds, {
        foreignKey : "deletedBy",
        as : "deleted"
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: {
      type : DataTypes.STRING,
      unique : true,
      validate :{
        isEmail: {
          msg : "please input correct email format"
        }
      },
      allowNull : false
    },
    encryptPassword: {
      type : DataTypes.STRING,
      allowNull : false
    },
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING,
    role : {
      allowNull : false,
      type : DataTypes.ENUM('SUPERADMIN', 'ADMIN', 'MEMBER')
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  
  return User;
};