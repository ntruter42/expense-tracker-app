export default function () {
	async function returnTrue() {
		return true;
	}

	// Create function addExpense that takes in description, amount and category_id
	// Create query variable
	// Use INSERT INTO to add description, amount and category_id into expenses table
	// Return expense_id if successful

	// Create function allExpenses
	// Create query variable
	// Use SELECT to return all rows from the expenses table
	// Return the list of rows

	// Create function expensesForCategory that takes in a category_id
	// Create query variable
	// Use SELECT to return rows from the expenses table if category_id is equal to given category_id
	// Return the list of rows

	// Create function deleteExpense that takes in an expense_id
	// Create query variable
	// Use DELETE FROM to delete rows from the expenses table if expense_id is equal to the given expense_id
	// Return the expense_id of the deleted row if successful

	// Create function categoryTotals
	// Create query variable
	// Use SELECT to return combined totals from the each category in the expenses table
	// Return the list of totals with the category names

	return {
		returnTrue
	};
}