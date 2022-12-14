const mongoose = require("mongoose")

const expenseSchema = new mongoose.Schema({
	userid: {
		type: String,
		required: true,
	},
	amount: {
		type: Number,
		required: [true, "amount is required"],
	},
	category: {
		type: String,
		required: [true, "category is required"],
	},
	reference: {
		type: String,
	},
	description: {
		type: String,
		required: [true, "description is required"],
	},
	date: {
		type: String,
		required: [true, "date is required"],
	},
})

const expenseModel = mongoose.model("expenses", expenseSchema)
module.exports = expenseModel
