const db = require("./models");
db.sequelize.sync();

var controller = require("./controllers/moneytor.controller");

controller.create().then(function(data){
  console.log('Result:',data);
}).catch(function(err){
  console.log('Error',err);
})



