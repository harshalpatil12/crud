const { Model,DataTypes} = require('sequelize');
const sequelize = require('../../../config/database')

class Binated extends Model {}
Binated.init({
  binated_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  order: {
    type: DataTypes.STRING,
  },
  instruction: {
    type: DataTypes.STRING,
  },
  design_color: {
    type: DataTypes.STRING,
  },
  background_color: {
    type: DataTypes.STRING,
  },
  image_path: {
    type: DataTypes.STRING,
  },

},{
  sequelize,
  modelName:'binated'
});
  

module.exports = Binated;