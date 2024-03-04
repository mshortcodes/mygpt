import { getMessage } from './getMessage';

const mainLogo = document.getElementById('mainLogo');
const h2 = document.querySelector('h2');
const submitBtn = document.getElementById('submitBtn');
const textarea = document.querySelector('textarea');
const main = document.querySelector('main');
const bubbles = document.querySelectorAll('.bubble');

// check if there's an input value, hide logo, hide h2, align items to top, display bubbles, fetch data
export const setupSubmit = () => {
	submitBtn.addEventListener('click', () => {
		if (textarea.value.trim()) {
			mainLogo.classList.remove('flex');
			mainLogo.classList.add('hidden');
			h2.classList.add('hidden');
			main.classList.remove('justify-center');
			bubbles.forEach((bubble) => {
				bubble.classList.remove('hidden');
				console.log('clicked');
			});
			getMessage();
		}
	});
	// prevent enter from adding new line in textarea, check if there's an input value, hide logo, hide h2, align items to top, display bubbles, fetch data
	textarea.addEventListener('keydown', (event) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			if (textarea.value.trim()) {
				mainLogo.classList.remove('flex');
				mainLogo.classList.add('hidden');
				h2.classList.add('hidden');
				main.classList.remove('justify-center');
				bubbles.forEach((bubble) => {
					bubble.classList.remove('hidden');
				});
				getMessage();
			}
		}
	});

	// toggle disabled button and handle button opacity
	textarea.addEventListener('input', () => {
		if (textarea.value.trim()) {
			submitBtn.removeAttribute('disabled');
			submitBtn.classList.remove('opacity-10');
		} else {
			submitBtn.setAttribute('disabled', '');
			submitBtn.classList.add('opacity-10');
		}
	});
};