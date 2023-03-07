const express = require("express");

const router = express.Router();

const { controllersAuth } = require("../../controllers");

const { register, login } = controllersAuth;

const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/user");

router.post("/register", validateBody(schemas.registerSchema), register);

router.get("/login", validateBody(schemas.loginSchema), login);
module.exports = router;
