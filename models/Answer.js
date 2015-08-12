module.exports = function(sequelize, DataTypes) {
  var Answer = sequelize.define("Answer", {
    count_a: {
      type: DataTypes.INTEGER
    },
    count_b: {
      type: DataTypes.INTEGER
    },
    count_c: {
      type: DataTypes.INTEGER
    },
    count_d: {
      type: DataTypes.INTEGER
    }
  });

  return Answer;
};