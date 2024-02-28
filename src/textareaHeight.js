export const textareaHeight = () => {
	const textarea = document.querySelector('textarea');

	// dynamically grows/shrinks textarea
	textarea.addEventListener('input', () => {
		textarea.style.height = 'auto';
		textarea.style.height = `${textarea.scrollHeight}px`;
	});
};
