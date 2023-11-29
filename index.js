import app_setup from "./config/application.js";
import db_config from "./config/database.js";
import expense_services from "./services/expense_services.js";
import expense_routes from "./routes/expense_routes.js";

const app = app_setup();
const db = db_config();
const services = expense_services(db);

app.use('/', expense_routes);

export { services };

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
	console.log(`App started on PORT: ${PORT}`);
});