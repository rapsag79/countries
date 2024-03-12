const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificultad: {
    type: DataTypes.INTEGER,
    allowNull: true,
    },
    duracion: {
    type: DataTypes.INTEGER,
    allowNull: true,
    },
    temporada: {
    type: DataTypes.STRING,
    allowNull: true,
    },
  },
  { timestamps: false });
};