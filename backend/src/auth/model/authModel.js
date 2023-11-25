const { Model,DataTypes} = require('sequelize');
const sequelize = require('../../../config/database')

class Auth extends Model {}
Auth.init({
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstname: {
    type: DataTypes.STRING,
  },
  lastname: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
  },
  mobno: {
    type: DataTypes.STRING,

  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  }
},{
  sequelize,
  modelName:'auth'
});
  
// Define associations
// User.hasMany(Patient, { foreignKey: 'user_id', as: 'patients' });
// User.hasMany(Exam, { foreignKey: 'user_id', as: 'exams' });
// User.hasMany(Surgery, { foreignKey: 'user_id', as: 'surgery' });

module.exports = Auth;