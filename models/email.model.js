module.exports = (sequelize, Sequelize) => {
    const Email = sequelize.define("Email", {
      email_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      email: {
        type: Sequelize.STRING
      },
      person_id: {
        type: Sequelize.INTEGER
      }
    },{
      freezeTableName: true // Model tableName will be the same as the model name
    });
  
    return Email;
  };