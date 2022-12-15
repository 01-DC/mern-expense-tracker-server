const express = require("express")

const {
	addSetting,
	getSetting,
	updateSetting,
} = require("../controllers/settingController")

const router = express.Router()

router.post("/add-setting", addSetting)

router.post("/update-setting", updateSetting)

router.post("/get-setting", getSetting)

module.exports = router
