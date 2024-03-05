import { getResponse } from './getResponse';

const mainLogo = document.getElementById('mainLogo');
const h2 = document.querySelector('h2');
const submitBtn = document.getElementById('submitBtn');
const textarea = document.querySelector('textarea');
const main = document.querySelector('main');
const bubbles = document.querySelectorAll('.bubble');
const historyDivs = document.querySelectorAll('.history');

let messages = [];

// clear previous history, create new history
const createHistory = () => {
	historyDivs.forEach((historyDiv) => {
		historyDiv.innerHTML = '';
	});

	messages.forEach((message) => {
		historyDivs.forEach((historyDiv) => {
			let historyItem = document.createElement('p');
			historyItem.textContent = message.question;
			historyDiv.appendChild(historyItem);
		});
	});
};

// callback for getResponse to store messages
const saveMessage = (question, answer) => {
	messages.push({ question: question, answer: answer });
	console.log(messages);
	createHistory();
};

// check if there's an input value, hide logo, hide h2, align items to top, display bubbles, fetch data, create history
export const setupSubmit = () => {
	const handleSubmit = () => {
		if (textarea.value.trim()) {
			mainLogo.classList.remove('flex');
			mainLogo.classList.add('hidden');
			h2.classList.add('hidden');
			main.classList.remove('justify-center');
			bubbles.forEach((bubble) => {
				bubble.classList.remove('hidden');
				console.log('clicked');
			});

			getResponse(saveMessage);
		}
	};

	submitBtn.addEventListener('click', handleSubmit);

	// prevent enter from adding new line in textarea
	textarea.addEventListener('keydown', (event) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			handleSubmit();
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
