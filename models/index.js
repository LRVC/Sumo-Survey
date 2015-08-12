var Sequelize = require('sequelize');
var sequelize = new Sequelize('sumosurvey', 'Reece', '', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

var test = sequelize.authenticate()
    .then(function () {
        console.log("Connected");
    })
    .catch(function (err) {
        console.log(err);
    })
    .done();