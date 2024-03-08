import { getResponse } from './getResponse';
import { clickCards } from './clickCards';

const mainLogo = document.getElementById('mainLogo');
const h2 = document.querySelector('h2');
const submitBtn = document.getElementById('submitBtn');
const textarea = document.querySelector('textarea');
const main = document.querySelector('main');
const bubbles = document.querySelectorAll('.bubble');
const historyDivs = document.querySelectorAll('.history');
const inputBubble = document.querySelector('#inputBubble');
const outputBubble = document.querySelector('#outputBubble');
const cards = document.querySelector('#cards');

let messages = [];

// clear previous history
const clearHistory = () => {
	historyDivs.forEach((historyDiv) => {
		historyDiv.innerHTML = '';
	});
};

// call clearHistory, create new list items, style list items, add new history items, add event listener to replace input/output bubbles with history
const addHistoryItems = () => {
	clearHistory();
	messages.forEach((message) => {
		historyDivs.forEach((historyDiv) => {
			const historyElement = document.createElement('li');
			historyElement.classList.add(
				'cursor-pointer',
				'truncate',
				'rounded-lg',
				'p-2',
				'hover:bg-neutral-800',
			);
			historyElement.innerText = message.question;
			historyDiv.appendChild(historyElement);

			historyElement.addEventListener('click', () => {
				inputBubble.innerText = message.question;
				outputBubble.innerText = message.answer;
			});
		});
	});
};

// callback for getResponse to store messages
const saveMessage = (question, answer) => {
	messages.push({ question: question, answer: answer });
	addHistoryItems();
};

// check if there's an input value, hide logo, hide h2, hide cards, align items to top, display bubbles, fetch data, create history
const handleSubmit = () => {
	if (textarea.value.trim()) {
		mainLogo.classList.remove('flex');
		mainLogo.classList.add('hidden');
		h2.classList.add('hidden');
		cards.classList.add('hidden');
		main.classList.remove('justify-center');
		bubbles.forEach((bubble) => {
			bubble.classList.remove('hidden');
		});

		getResponse(saveMessage);
	}
};

export const setupSubmit = () => {
	submitBtn.addEventListener('click', handleSubmit);

	// prevent enter from adding new line in textarea
	textarea.addEventListener('keydown', (event) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			handleSubmit();
		}
	});

	clickCards(handleSubmit);

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
