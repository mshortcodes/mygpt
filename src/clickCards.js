const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');
const card4 = document.querySelector('#card4');

const textarea = document.querySelector('textarea');

const card1_h4 = document.getElementById('card1_h4');
const card1_p = document.getElementById('card1_p');
const card2_h4 = document.getElementById('card2_h4');
const card2_p = document.getElementById('card2_p');
const card3_h4 = document.getElementById('card3_h4');
const card3_p = document.getElementById('card3_p');
const card4_h4 = document.getElementById('card4_h4');
const card4_p = document.getElementById('card4_p');

export const clickCards = (handleSubmit) => {
	card1.addEventListener('click', () => {
		textarea.value = `${card1_h4.innerText} ${card1_p.innerText}`;
		handleSubmit();
	});
	card2.addEventListener('click', () => {
		textarea.value = `${card2_h4.innerText} ${card2_p.innerText}`;
		handleSubmit();
	});
	card3.addEventListener('click', () => {
		textarea.value = `${card3_h4.innerText} ${card3_p.innerText}`;
		handleSubmit();
	});
	card4.addEventListener('click', () => {
		textarea.value = `${card4_h4.innerText} ${card4_p.innerText}`;
		handleSubmit();
	});
};
