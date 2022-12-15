const mongoose = require("mongoose")

const settingSchema = new mongoose.Schema(
	{
		userid: {
			type: String,
			required: [true, "userid is required"],
		},
		budget: {
			type: Number,
			default: 0,
		},
		categories: {
			type: [String],
			default: ["Credit", "Debit"],
		},
	},
	{ timestamps: true }
)

const settingModel = mongoose.model("settings", settingSchema)
module.exports = settingModel
