const refreshButtons = document.querySelectorAll('.refresh');

export const refreshPage = () => {
	refreshButtons.forEach((refreshButton) => {
		refreshButton.addEventListener('click', () => {
			window.location.reload();
		});
	});
};
