module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("Question", {
    question_body: { 
    	type: DataTypes.TEXT
    },
    answer_a: { 
    	type: DataTypes.TEXT
    }, 
    answer_b: { 
    	type: DataTypes.TEXT
    },
    answer_c: { 
    	type: DataTypes.TEXT 
    },
    answer_c: { 
    	type: DataTypes.TEXT
    },
    a_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    b_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    c_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    d_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
  });

  return Question;
};

