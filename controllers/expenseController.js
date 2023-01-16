const expenseModel = require("../models/expenseModel")

const getAllExpense = async (req, res) => {
	try {
		const expenses = await expenseModel.find({
			userid: req.body.userid,
		})
		res.status(200).json(expenses)
	} catch (error) {
		console.log(error)
		res.status(500).json(error)
	}
}

const deleteExpense = async (req, res) => {
	try {
		await expenseModel.findOneAndDelete({
			_id: req.body.expenseId,
		})
		res.status(200).send("Expense deleted")
	} catch (error) {
		console.log(error)
		res.status(500).json(error)
	}
}

const editExpense = async (req, res) => {
	try {
		await expenseModel.findOneAndUpdate(
			{ _id: req.body.expenseId },
			req.body.payload
		)
		res.status(200).send("Edit successful")
	} catch (error) {
		console.log(error)
		res.status(500).json(error)
	}
}

const addExpense = async (req, res) => {
	try {
		const newExpense = new expenseModel(req.body)
		await newExpense.save()
		res.status(201).json(newExpense)
	} catch (error) {
		console.log(error)
		res.status(500).json(error)
	}
}

const splitExpense = async (req, res) => {
	try {
		await expenseModel.findOneAndUpdate(
			{ _id: req.body.expenseId },
			{ $push: { split: req.body.payload } }
		)
		res.status(200).send("Split successful")
	} catch (error) {
		console.log(error)
		res.status(500).json(error)
	}
}

const splitStatusToggle = async (req, res) => {
	try {
		const { splitId, status } = req.body
		await expenseModel.findOneAndUpdate(
			{ "split._id": splitId },
			{ $set: { "split.$.paid": status } }
		)
		return res.status(200).send("Status toggled")
	} catch (error) {
		console.log(error)
		res.status(500).json(error)
	}
}

const getAllSplitExpense = async (req, res) => {
	try {
		const expenses = await expenseModel.find({
			"split.email": req.body.userid,
			"split.paid": false,
		})
		res.status(200).json(expenses)
	} catch (error) {
		console.log(error)
		res.status(500).json(error)
	}
}

module.exports = {
	getAllExpense,
	addExpense,
	editExpense,
	deleteExpense,
	splitExpense,
	splitStatusToggle,
	getAllSplitExpense,
}
