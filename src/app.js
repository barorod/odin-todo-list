import { form } from './inputDom';
import './normalize.css';
import './styles.css';
import { todoCards } from './todoListDom';

const addTodoBtn = document.querySelector('#addTodoBtn');
const mainContent = document.querySelector('.mainContent');

addTodoBtn.addEventListener('click', () => {
  mainContent.innerHTML = '';
  mainContent.append(form);
});

mainContent.append(...todoCards);
