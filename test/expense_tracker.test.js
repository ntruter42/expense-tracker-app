import assert from 'assert';
// import Database from '../config/database.js';
import expense_services from '../services/expense_services.js';

describe('Expense Tracker App', async function () {
	const services = expense_services();
	// const db = Database();

	// beforeEach(async function () {
	// 	// 
	// });

	describe('Sample', function () {
		it('should be true', async function () {
			assert.equal(true, await services.returnTrue());
		});
	});

	// Create test for addExpense
	// Create variable to store expected return value
	// Call addExpense service function
	// Create variable to store actual return variable
	// Check if addExpense variable returns expense_id
	// Check if addExpense variable returns nothing if no description is given
	// Check if addExpense returns nothing if no amount is given
	// Check if addExpense returns nothing if no category_id is given

	// Create test for allExpenses
	// Create variable to store expected return value
	// Call addExpense service function
	// Create variable to store actual return variable
	// Check if allExpenses returns list of expenses
	// Check if allExpenses returns empty list if there are no expenses

	// Create test for expensesForCategory
	// Create variable to store expected return value
	// Call addExpense service function
	// Create variable to store actual return variable
	// Check if expensesForCategory returns only expense for given category
	// Check if expensesForCategory returns error message if no category is given

	// Create test for deleteExpense
	// Create variable to store expected return value
	// Call addExpense service function
	// Create variable to store actual return variable
	// Check if deleteExpense returns expense_id of deleted expense

	// Create test for categoryTotals
	// Create variable to store expected return value
	// Call addExpense service function
	// Create variable to store actual return variable
	// Check if categoryTotals returns the total for the correct category

});