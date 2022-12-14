const express = require("express")

const {
	addExpense,
	getAllExpense,
	editExpense,
	deleteExpense,
} = require("../controllers/expenseController")

const router = express.Router()

router.post("/add-expense", addExpense)

router.post("/edit-expense", editExpense)

router.post("/delete-expense", deleteExpense)

router.post("/get-expense", getAllExpense)

module.exports = router
