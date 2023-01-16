const userModel = require("../models/userModel")

const loginController = async (req, res) => {
	try {
		const { email, password } = req.body
		const user = await userModel.findOne({ email, password })
		if (!user) {
			return res.status(404).send("User Not Found")
		}
		user.password = undefined
		res.status(200).json({ success: true, user })
	} catch (error) {
		res.status(400).json({ success: false, error })
	}
}

const registerController = async (req, res) => {
	try {
		const newUser = new userModel(req.body)
		await newUser.save()
		res.status(201).json({ success: true, newUser })
	} catch (error) {
		res.status(400).json({ success: false, error })
	}
}

const getUserByEmailController = async (req, res) => {
	try {
		const { email } = req.body
		const user = await userModel.findOne({ email })
		if (!user) {
			return res.status(200).json({ success: false })
		}
		user.password = undefined
		return res.status(200).json({ success: true, user })
	} catch (error) {
		res.status(400).json({ success: false, error })
	}
}

module.exports = {
	loginController,
	registerController,
	getUserByEmailController,
}
