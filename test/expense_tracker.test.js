import assert from 'assert';
import Database from '../config/database.js';
import expense_services from '../services/expense_services.js';

describe('Expense Tracker App', async function () {
	const db = Database();
	let services = expense_services(db);
	this.timeout(4000);

	beforeEach(async function () {
		await services.resetExpenses();
	});

	describe('Sample', function () {
		it('should be true', async function () {
			assert.equal(true, await services.returnTrue());
		});
	});

	// Create test for addExpense
	describe('addExpense', function () {

		// Check if addExpense variable returns expense_id
		it('should return expense_id if expense has been added to the table', async function () {
			// Create variable to store expected return value
			const expected = { expense_id: 1 };
			// Create variable to store actual return variable
			// Call addExpense service function
			const actual = await services.addExpense('Lunch', 30, 2); // weekday id = 2
			// Call assert.deepEqual to compare expected results with actual results
			assert.deepEqual(actual, expected);
		});

		// Check if addExpense variable returns nothing if no description is given
		it('should return null if no description is given', async function () {
			// Create variable to store expected return value
			const expected = null;
			// Create variable to store actual return variable
			// Call addExpense service function
			const actual = await services.addExpense('', 30, 2); // weekday id = 2
			// Call assert.deepEqual to compare expected results with actual results
			assert.deepEqual(expected, actual);
		});

		// Check if addExpense returns nothing if no amount is given
		it('should return null if negative or no amount is given', async function () {
			// Create variable to store expected return value
			const expected = null;
			// Create variable to store actual return variable
			// Call addExpense service function
			const actual = await services.addExpense('Lunch', -10, 2); // weekday id = 2
			// Call assert.deepEqual to compare expected results with actual results
			assert.deepEqual(expected, actual);

			// Call addExpense service function
			const actual2 = await services.addExpense('Lunch', undefined, 2); // weekday id = 2
			// Call assert.deepEqual to compare expected results with actual results
			assert.deepEqual(expected, actual2);
		});

		// Check if addExpense returns nothing if no category_id is given
		it('should return null if invalid category_id is given', async function () {
			// Create variable to store expected return value
			const expected = null;
			// Create variable to store actual return variable
			// Call addExpense service function
			const actual = await services.addExpense('Lunch', 30, 8); // weekday id = 2
			// Call assert.deepEqual to compare expected results with actual results
			assert.deepEqual(expected, actual);
		});
	});

	// Create test for allExpenses

	// Check if allExpenses returns list of expenses
	// Create variable to store expected return value
	// Create variable to store actual return variable
	// Call allExpenses service function
	// Call assert.deepEqual to compare expected results with actual results

	// Check if allExpenses returns empty list if there are no expenses
	// Create test for allExpenses
	// Create variable to store expected return value
	// Create variable to store actual return variable
	// Call allExpenses service function
	// Call assert.deepEqual to compare expected results with actual results


	// Create test for expensesForCategory

	// Check if expensesForCategory returns only expense for given category
	// Create variable to store expected return value
	// Create variable to store actual return variable
	// Call expensesForCategory service function
	// Call assert.deepEqual to compare expected results with actual results

	// Check if expensesForCategory returns error message if no category is given
	// Create variable to store expected return value
	// Create variable to store actual return variable
	// Call expensesForCategory service function
	// Call assert.deepEqual to compare expected results with actual results


	// Create test for deleteExpense

	// Check if deleteExpense returns expense_id of deleted expense
	// Create variable to store expected return value
	// Create variable to store actual return variable
	// Call deleteExpense service function
	// Call assert.deepEqual to compare expected results with actual results


	// Create test for categoryTotals

	// Check if categoryTotals returns the total for the correct category
	// Create variable to store expected return value
	// Create variable to store actual return variable
	// Call categoryTotals service function
	// Call assert.deepEqual to compare expected results with actual results

});