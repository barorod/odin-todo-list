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
