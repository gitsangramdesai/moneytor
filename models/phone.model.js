module.exports = (sequelize, Sequelize) => {
    const Phone = sequelize.define("Phone", {
      phone_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      phone_no: {
        type: Sequelize.STRING
      },
      person_id: {
        type: Sequelize.INTEGER
      }
    },{
      freezeTableName: true // Model tableName will be the same as the model name
    });
  
    return Phone;
  };