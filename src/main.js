import './style.css';
import { textareaHeight } from './textareaHeight';
import { sidebar } from './sidebar';
import { getMessage } from './getMessage';

textareaHeight();
sidebar();

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', getMessage);
