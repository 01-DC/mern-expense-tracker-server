const express = require("express")

const {
	addExpense,
	getAllExpense,
	editExpense,
	deleteExpense,
	splitExpense,
	splitStatusToggle,
	getAllSplitExpense,
} = require("../controllers/expenseController")

const router = express.Router()

router.post("/add-expense", addExpense)

router.post("/edit-expense", editExpense)

router.post("/delete-expense", deleteExpense)

router.post("/get-expense", getAllExpense)

router.post("/get-split-expense", getAllSplitExpense)

router.post("/split-expense", splitExpense)

router.post("/toggle-split", splitStatusToggle)

module.exports = router
