import { getAllTodos } from './todo';
import { createElement, timeRemaining } from './utils';

// {title: 'ss', description: 'ss', dueDate: '2024-10-19T02:22', priority: 'on'}

const renderTodos = (category = 'default') => {
  const allTodos = getAllTodos();

  const todoCards = allTodos
    .filter((cate) => cate.category === category)
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

  return todoCards;
};

export { renderTodos };
