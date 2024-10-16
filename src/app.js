import './normalize.css';
import './styles.css';
import {
  addTodo,
  addTodoList,
  getAllTodoLists,
  getTodosFromList,
} from './todo';

addTodoList('test');
addTodo('Todo Title', 'Todo description', new Date(), true);
addTodo('Todo Title 2', 'Todo description 2', new Date(), false);

console.log(getAllTodoLists());
