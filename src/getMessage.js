import { config } from '../config';

const API_KEY = config.API_KEY;
const textarea = document.querySelector('textarea');
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const submitBtn = document.getElementById('submitBtn');

export const getMessage = async () => {
	const options = {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${API_KEY}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			model: 'gpt-3.5-turbo',
			messages: [
				{
					role: 'user',
					content: textarea.value,
				},
			],
			max_tokens: 100,
		}),
	};

	try {
		const response = await fetch(
			'https://api.openai.com/v1/chat/completions',
			options,
		);
		const data = await response.json();
		// if there's a response, assign my message to input bubble, assign response to output bubble, reset state of textarea and submit button
		if (data.choices[0].message.content) {
			let previousValue = textarea.value;
			input.textContent = previousValue;
			output.innerHTML = data.choices[0].message.content.replace(
				/\n/g,
				'<br>',
			);
			textarea.value = '';
			submitBtn.setAttribute('disabled', '');
			submitBtn.classList.add('opacity-10');
		}
	} catch (error) {
		console.error(error);
	}
};
