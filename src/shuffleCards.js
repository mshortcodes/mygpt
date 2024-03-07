import { cards } from './cards';

const card1_h4 = document.getElementById('card1_h4');
const card1_p = document.getElementById('card1_p');
const card2_h4 = document.getElementById('card2_h4');
const card2_p = document.getElementById('card2_p');
const card3_h4 = document.getElementById('card3_h4');
const card3_p = document.getElementById('card3_p');
const card4_h4 = document.getElementById('card4_h4');
const card4_p = document.getElementById('card4_p');

// generates random number between 0 and 4
const randomNumber = Math.floor(Math.random() * 5);

export const shuffleCards = () => {
	card1_h4.innerText = cards.card1[randomNumber].h4;
	card1_p.innerText = cards.card1[randomNumber].p;
	card2_h4.innerText = cards.card2[randomNumber].h4;
	card2_p.innerText = cards.card2[randomNumber].p;
	card3_h4.innerText = cards.card3[randomNumber].h4;
	card3_p.innerText = cards.card3[randomNumber].p;
	card4_h4.innerText = cards.card4[randomNumber].h4;
	card4_p.innerText = cards.card4[randomNumber].p;
};
