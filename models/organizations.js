'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organizations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Organizations.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      welcomeText: DataTypes.STRING,

      twitter: DataTypes.STRING,
      vimeo: DataTypes.STRING,
      facebook: DataTypes.STRING,
      flickr: DataTypes.STRING,
      linkedin: DataTypes.STRING,
      youtube: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Organizations',
    }
  );
  return Organizations;
};
