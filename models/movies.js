const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('movie', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
   },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    released: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW
    },
    rating: {
      type: DataTypes.FLOAT
    },
    image: {
      type: DataTypes.STRING
    }
  }, {timestamps: false});
};