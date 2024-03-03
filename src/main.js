import './style.css';
import { textareaHeight } from './textareaHeight';
import { setupSidebar } from './setupSidebar';
import { getMessage } from './getMessage';
import { setupMobileSidebar } from './setupMobileSidebar';

textareaHeight();
setupSidebar();
setupMobileSidebar();

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', getMessage);
