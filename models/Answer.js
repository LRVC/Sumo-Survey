module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Answer', {
    answer_body: DataTypes.TEXT,
    count: DataTypes.INTEGER
  });
};