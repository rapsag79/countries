const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activities', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
  },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    difficulty: {
    type: DataTypes.STRING,
    allowNull: true,
    },
    duration: {
    type: DataTypes.STRING,
    allowNull: true,
    },
    season: {
    type: DataTypes.STRING,
    allowNull: true,
    },
  },
  { timestamps: false });
};


