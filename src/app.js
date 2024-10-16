import './normalize.css';
import './styles.css';
import {
  addTodo,
  addTodoList,
  getAllTodoLists,
  getTodosFromList,
} from './todo';

addTodoList('TEST');
addTodo('Todo Title', 'Todo description', new Date(), true, 'test');
addTodo('Todo Title 2', 'Todo description 2', new Date(), false);

console.log(getAllTodoLists());
