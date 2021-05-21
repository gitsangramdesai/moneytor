module.exports = (sequelize, Sequelize) => {
    const Address = sequelize.define("Address", {
      address_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      street_number: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      person_id: {
        type: Sequelize.INTEGER
      }
    },{
      freezeTableName: true // Model tableName will be the same as the model name
    });
  
    return Address;
  };