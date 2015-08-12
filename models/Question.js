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
  });

  return Question;
};

