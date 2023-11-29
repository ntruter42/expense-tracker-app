DROP TABLE IF EXISTS expense.expenses;
DROP TABLE IF EXISTS expense.categories;

CREATE TABLE expense.categories (
	category_id SERIAL PRIMARY KEY,
	category_type TEXT NOT NULL UNIQUE
);

CREATE TABLE expense.expenses (
	expense_id SERIAL PRIMARY KEY,
	description TEXT NOT NULL,
	amount NUMERIC NOT NULL,
	total NUMERIC NOT NULL,
	category_id INT REFERENCES expense.categories(category_id) ON DELETE CASCADE
);

INSERT INTO expense.categories (category_type) VALUES ('daily');
INSERT INTO expense.categories (category_type) VALUES ('weekday');
INSERT INTO expense.categories (category_type) VALUES ('weekend');
INSERT INTO expense.categories (category_type) VALUES ('weekly');
INSERT INTO expense.categories (category_type) VALUES ('monthly');
INSERT INTO expense.categories (category_type) VALUES ('once-off');