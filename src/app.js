import { form } from './inputDom';
import './normalize.css';
import { renderTodos } from './renderTodosDom';
import './styles.css';

const addTodoBtn = document.querySelector('#addTodoBtn');
const mainContent = document.querySelector('.mainContent');

addTodoBtn.addEventListener('click', () => {
  mainContent.innerHTML = '';
  mainContent.append(form);
});

const todos = renderTodos();
mainContent.append(...todos);
