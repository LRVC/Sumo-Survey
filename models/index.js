var Sequelize = require('sequelize')
var sqlObj = {}

var sequelize = new Sequelize('sumosurvey', 'Reece', '', {
  host: 'localhost',
  dialect: 'postgres'
});

var test = sequelize.authenticate()
    .then(function () {
        console.log("Connected");
    })
    .catch(function (err) {
        console.log(err);
    })
    .done();

var models = [
  'Question'
];

models.forEach(function(model) {
  sqlObj[model] = sequelize.import(__dirname + '/' + model);
});

sqlObj.Question.sync({force: true});

sqlObj.sequelize = sequelize;
sqlObj.Sequelize = Sequelize;

module.exports = sqlObj;
