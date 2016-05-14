// //Dependencies 

// var orm = require('../config/orm.js');


// // App that creates the burger
// var burger = {
// 	selectAllBurger: function(cb) {
// 		orm.selectAll('burgers', function(res){
// 			cb(res)
// 		});
// 	},
// 	addBurger: function(nameInput,cb) {
// 		orm.insertOne('burgers', nameInput, 0, cb);
// 	},
// 	eatBurger: function(inputId, cb) {
// 		orm.updateOne('burgers', 1, inputId, cb);
// 	}
// };

var Sequelize = require ('sequelize');

var sequelize = require ('../config/connection.js');

var Burgers = sequelize.define('burgers', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	burger_name: {
		type: Sequelize.STRING,

	},
	devoured: {
		type:Sequelize.BOOLEAN,
	},
	date: {
		type: Sequelize.DATE,
	},

});

Burgers.sync();

module.exports =Burgers;
