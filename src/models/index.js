import { sqlCon, User } from './sql'
// console.log('\n\n User, sqlCon indexjs', User, sqlCon)

let users = [
	{
		name: "Robin Wieruch",
		email: "robin@gmail.com",
		password: "robin1",
	},
	{
		name: "John",
		email: "john@gmail.com",
		password: "john1",
	},
];

let messages = {
	1: {
		id: "1",
		text: "Hello World",
		userId: "1",
	},
	2: {
		id: "2",
		text: "By World",
		userId: "2",
	},
};

export {
	users,
	messages,
	sqlCon,
	User
};
