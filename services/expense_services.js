export default function (db) {
	async function returnTrue() {
		return true;
	}

	// Create function addExpense that takes in description, amount and category_id
	async function addExpense(description, amount, category_id) {
		// Calculate total based on category type
		if (!description || !amount || !category_id
			|| amount <= 0 || category_id < 1 || category_id > 6) {
			return null;
		}

		let total;
		switch (category_id) {
			case 1:
				// daily
				total = amount * 30;
				break;
			case 2:
				// weekday
				total = amount * 5 * 4;
				break;
			case 3:
				// weekend
				total = amount * 2 * 4;
				break;
			case 4:
				// weekly
				total = amount * 4;
				break;
			default:
				// monthly and once-off
				total = amount;
				break;
		}
		// Create query variable
		// Use INSERT INTO to add description, amount and category_id into expenses table
		const query = `
			INSERT INTO expense.expenses (description, amount, total, category_id)
			VALUES ($1, $2, $3, $4)
			RETURNING expense_id;
		`;
		// Return expense_id if successful
		return await db.oneOrNone(query, [description, amount, total, category_id]);
	}

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

	async function resetExpenses() {
		await db.none(`
			TRUNCATE TABLE expense.expenses;
			ALTER SEQUENCE expense.expenses_expense_id_seq RESTART WITH 1;
		`);
	}

	return {
		returnTrue,
		addExpense,
		resetExpenses
	};
}