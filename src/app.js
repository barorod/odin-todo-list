import { form } from './inputDom';
import './normalize.css';
import { renderTodos } from './renderTodosDom';
import './styles.css';

const addTodoBtn = document.querySelector('#addTodoBtn');
const mainContent = document.querySelector('.mainContent');

function updateDisplay() {
  const todos = renderTodos();
  mainContent.innerHTML = '';
  if (todos.length === 0 || mainContent.contains(form)) {
    mainContent.append(form);
  } else {
    mainContent.append(...todos);
  }
}

addTodoBtn.addEventListener('click', () => {
  if (mainContent.contains(form)) {
    updateDisplay();
  } else {
    mainContent.innerHTML = '';
    mainContent.append(form);
  }
});

updateDisplay();
