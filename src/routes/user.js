import { Router } from "express";
import schemas from "../validate/schemas";
import { validator } from "../validate/validation";
import usersService from "../services/users";
import { sqlCon, User } from "../models";

console.log('\n\n User, sqlCon', User, sqlCon)

const router = Router();

router.get("/", (req, res) => {
	return res.send(Object.values(req.context.models.users));
});

router.get("/:userId", (req, res) => {
	return res.send(req.context.models.users[req.params.userId]);
});

router.post("/register", validator(schemas.signup), (req, res) => {
	// Insert a new record into the database
	User.create(req.body).then((user) => {
		console.log(
			user.get({
				plain: true,
			}),
		);
		res.send({res: user})
	});
});

router.post("/login", validator(schemas.login), (req, res) => {
	res.send({'res': req.body})
});

export default router;
