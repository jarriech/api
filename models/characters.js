const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('character', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
          image:{
            type: DataTypes.STRING,
          },
          age:{
            type: DataTypes.INTEGER,
          },
          weight:{
            type: DataTypes.INTEGER,
          },
          history:{
            type: DataTypes.TEXT,
          },
    });
};