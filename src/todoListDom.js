import { createElement } from './utils';

const todoContainer = createElement('div', { className: 'todoContainer' });
const todoTitle = createElement('h1', { className: 'todoTitle' });
const todoDescription = createElement('p', { className: 'todoDescription' });
const todoDueDate = createElement('p', { className: 'todoDate' });
const todoPriority = createElement('p', { className: 'todoPriority' });

todoContainer.append(todoTitle, todoDescription, todoDueDate, todoPriority);
