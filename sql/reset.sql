DROP TABLE IF EXISTS expense.expenses;
DROP TABLE IF EXISTS expense.categories;

CREATE TABLE expense.categories (
	category_id SERIAL PRIMARY KEY,
	category_type VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE expense.expenses (
	expense_id SERIAL PRIMARY KEY,
	expense TEXT NOT NULL,
	amount NUMERIC NOT NULL,
	total NUMERIC NOT NULL,
	category_id INT REFERENCES expense.categories(category_id) ON DELETE CASCADE
);

INSERT INTO expense.categories (category_type) VALUES ('weekly');
INSERT INTO expense.categories (category_type) VALUES ('monthly');
INSERT INTO expense.categories (category_type) VALUES ('weekday');
INSERT INTO expense.categories (category_type) VALUES ('weekend');
INSERT INTO expense.categories (category_type) VALUES ('once-off');
INSERT INTO expense.categories (category_type) VALUES ('daily');