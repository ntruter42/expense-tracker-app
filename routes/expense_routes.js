import { Router } from "express";
import { services } from "../index.js";

const router = Router();

router.get('/', async (req, res) => {
	const categories = [
		{ category_id: 1, category_type: 'Daily' },
		{ category_id: 2, category_type: 'Weekday' },
		{ category_id: 3, category_type: 'Weekend' },
		{ category_id: 4, category_type: 'Weekly' },
		{ category_id: 5, category_type: 'Monthly' },
		{ category_id: 6, category_type: 'Once-Off' },
	];

	const message = {
		text: req.flash('message')[0],
		type: req.flash('message-type')
	};

	res.render('home', {
		title: 'Home',
		categories,
		message
	});
});

router.post('/add', async (req, res) => {
	const description = req.body.description;
	const amount = Number(req.body.amount);
	const category = req.body.category;

	if (!amount) {
		req.flash('message', "Amount cannot be empty");
		req.flash('message-type', "error");
	} else if (typeof amount !== 'number') {
		req.flash('message', "Amount must be a number");
		req.flash('message-type', "error");
	} else if (amount <= 0) {
		req.flash('message', "Amount cannot be negative or zero");
		req.flash('message-type', "error");
	} else if (!description) {
		req.flash('message', "Description cannot be empty");
		req.flash('message-type', "error");
	} else {
		const expense_id = await services.addExpense(description, Number(amount), category);
		if (expense_id) {
			req.flash('message', "Expense successfully added");
			req.flash('message-type', "success");
		}
	}

	res.redirect('/');
});

export default router;