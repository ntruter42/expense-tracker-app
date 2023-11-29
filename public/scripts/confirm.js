window.addEventListener('load', () => {
	const reset = document.querySelector('button[name="delete"]');

	if (reset) {
		reset.addEventListener('click', (event) => {
			if (!window.confirm("Are you sure you delete this expense?")) {
				event.preventDefault();
			}
		});
	}
});