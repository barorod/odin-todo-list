import { form } from './inputDom';
import './normalize.css';
import './styles.css';
import {
  addTodo,
  addTodoList,
  getAllTodoLists,
  getTodosFromList,
} from './todo';

const addTodoBtn = document.querySelector('#addTodoBtn');
const mainContent = document.querySelector('.mainContent');

addTodoBtn.addEventListener('click', () => {
  mainContent.innerHTML = '';
  mainContent.append(form);
});

addTodoList('TEST');
addTodo('Todo Title', 'Todo description', new Date(), true, 'test');
addTodo('Todo Title 2', 'Todo description 2', new Date(), false);

console.log(getAllTodoLists());
