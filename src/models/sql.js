const { Sequelize } = require("sequelize");
console.log("\n\n ** ", process.env.MYSQL_USERNAME);

const sqlCon = new Sequelize("app", "root", "Mahesh1$", {
	host: "127.0.0.1",
	port: 13306,
	dialect: "mysql",
	dialectModule: require("mysql2"),
});

try {
	sqlCon.authenticate()
		.then(() => {
			console.log("Connection has been established successfully.");
		})
		.catch((error) => {
			console.error("Unable to connect to the database:", error);
		});
} catch (error) {}

const User = sqlCon.define("users", {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	email: {
		validate: {
			isEmail: true,
		},
		primaryKey: true,
		type: Sequelize.STRING,
	},
	password: Sequelize.STRING,
});
sqlCon
	.sync({
		logging: console.log,
		force: false,
	})
	.then(() => {
		console.log("Connection to database established successfully.");
		// console.log("\n\n ** users", models.users);
		// User.bulkCreate(models.users);
		// User.findAll()
		// 	.then((res) => {
		// 		console.log(res);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});
	})
	.catch((error) => {
		console.log(error);
		res.status(404).send(error);
	});

export {
	sqlCon,
	User,
};

