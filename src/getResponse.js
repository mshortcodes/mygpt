const API_KEY = import.meta.env.VITE_OPENAI_API;
const textarea = document.querySelector('textarea');
const inputBubble = document.getElementById('inputBubble');
const outputBubble = document.getElementById('outputBubble');
const submitBtn = document.getElementById('submitBtn');

// assign question to input bubble, assign response to output bubble, reset state of textarea and submit button
const handleResponse = (question, answer) => {
	inputBubble.innerText = question;
	outputBubble.innerHTML = answer.replace(/\n/g, '<br>');
	textarea.value = '';
	submitBtn.setAttribute('disabled', '');
	submitBtn.classList.add('opacity-10');
};

export const getResponse = async (callback) => {
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
			max_tokens: 1000,
		}),
	};

	try {
		const response = await fetch(
			'https://api.openai.com/v1/chat/completions',
			options,
		);
		const data = await response.json();
		// create variables with my question and answer, save messages with callback
		if (data.choices[0].message.content) {
			let question = textarea.value;
			let answer = data.choices[0].message.content;
			callback(question, answer);
			handleResponse(question, answer);
		}
	} catch (error) {
		console.error(error);
	}
};
