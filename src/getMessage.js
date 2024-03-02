import { config } from '../config';

const API_KEY = config.API_KEY;

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
					content: 'Hello!',
				},
			],
			max_tokens: 10,
		}),
	};

	try {
		const response = await fetch(
			'https://api.openai.com/v1/chat/completions',
			options,
		);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error(error);
	}
};
