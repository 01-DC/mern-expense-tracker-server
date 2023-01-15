const express = require("express")
const {
	loginController,
	registerController,
	getUserByEmailController,
} = require("../controllers/userController")

const router = express.Router()

router.post("/login", loginController)

router.post("/register", registerController)

router.post("/find-user", getUserByEmailController)

module.exports = router
