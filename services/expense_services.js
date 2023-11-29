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

		let total = 0;
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
			case 5:
				// monthly
				total = amount;
				break;
			case 6:
				// once-off
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
	async function allExpenses() {
		// Create query variable
		// Use SELECT to return all rows from the expenses table
		const query = `
		SELECT * FROM expense.expenses
			JOIN expense.categories ON expense.categories.category_id = expense.expenses.category_id;
		`;

		// Return the list of rows
		return db.manyOrNone(query);
	}

	// Create function expensesForCategory that takes in a category_id
	async function expensesForCategory(category_id) {
		// Create query variable
		// Use SELECT to return rows from the expenses table if category_id is equal to given category_id
		const query = `
		SELECT * FROM expense.expenses
		JOIN expense.categories ON expense.categories.category_id = expense.expenses.category_id
		WHERE expense.expenses.category_id = $1;
		`;

		// Return the list of rows
		return db.manyOrNone(query, [category_id]);
	}

	// Create function deleteExpense that takes in an expense_id
	async function deleteExpense(expense_id) {
		// Create query variable
		// Use DELETE FROM to delete rows from the expenses table if expense_id is equal to the given expense_id
		const query = `
			DELETE FROM expense.expenses WHERE expense_id = $1;
		`;

		// Return the expense_id of the deleted row if successful
		return await db.oneOrNone(query, [expense_id]);
	}

	// Create function categoryTotals
	async function categoryTotals() {
		const expense = await allExpenses();

		const categories = [
			{ category_id: 1, category_type: 'Daily', total: 0 },
			{ category_id: 2, category_type: 'Weekday', total: 0 },
			{ category_id: 3, category_type: 'Weekend', total: 0 },
			{ category_id: 4, category_type: 'Weekly', total: 0 },
			{ category_id: 5, category_type: 'Monthly', total: 0 },
			{ category_id: 6, category_type: 'Once-Off', total: 0 }
		];

		expense.forEach(expense => {
			categories.forEach(category => {
				if (expense.category_id === category.category_id) {
					category.total += expense.total;
				}
			});
		});

		return categories;
	}
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
		allExpenses,
		deleteExpense,
		categoryTotals,
		resetExpenses
	};
}