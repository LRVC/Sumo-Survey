module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Question', {
    question_body: DataTypes.TEXT
  });
};