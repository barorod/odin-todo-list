import { getAllTodoLists } from './todo';
import { createElement, timeRemaining } from './utils';

const allTodoLists = getAllTodoLists();

// {title: 'ss', description: 'ss', dueDate: '2024-10-19T02:22', priority: 'on'}

const todoCards = allTodoLists
  .flatMap((list) => list.todos)
  .map((todo) => {
    const todoCard = createElement('div', { className: 'todoCard' });
    const todoTitle = createElement('h1', {
      className: 'todoTitle',
      textContent: todo.title,
    });
    const todoDescription = createElement('p', {
      className: 'todoDescription',
      textContent: todo.description,
    });
    const todoDueDate = createElement('p', {
      className: 'todoDate',
      textContent: timeRemaining(todo.dueDate),
    });
    const todoPriority = createElement('p', {
      className: 'todoPriority',
      textContent: `${todo.priority ? 'High' : 'Low'}`,
    });

    todoCard.append(todoTitle, todoDescription, todoDueDate, todoPriority);

    return todoCard;
  });

export { todoCards };
