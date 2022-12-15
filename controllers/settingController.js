const settingModel = require("../models/settingModel")

const getSetting = async (req, res) => {
	try {
		const setting = await settingModel.findOne({
			userid: req.body.userid,
		})
		res.status(200).json(setting)
	} catch (error) {
		console.log(error)
		res.status(500).json(error)
	}
}

const updateSetting = async (req, res) => {
	try {
		await settingModel.findOneAndUpdate(
			{ userid: req.body.userid },
			req.body.payload
		)
		res.status(200).send("Edit successful")
	} catch (error) {
		console.log(error)
		res.status(500).json(error)
	}
}

const addSetting = async (req, res) => {
	try {
		const newSetting = new settingModel(req.body)
		await newSetting.save()
		res.status(201).json(newSetting)
	} catch (error) {
		console.log(error)
		res.status(500).json(error)
	}
}

module.exports = {
	addSetting,
	getSetting,
	updateSetting,
}
