// const { Sequelize } = require('sequelize');


// sequelize = new Sequelize('promolink','postgres', 'Pass@123', {
//   dialect: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   logging: false,
// });

//   module.exports = sequelize;



const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('test-db','user','pass',{
    dialect:'sqlite',
    host: './dev.sqlite'
})

module.exports = sequelize;


