module.exports = (sequelize, Sequelize) => {
    const Person = sequelize.define("Person", {
      person_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      uuid: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATE
      }
    },{
      freezeTableName: true // Model tableName will be the same as the model name
    });
  
    return Person;
  };