const populateTodos = () => JSON.parse(localStorage.getItem('todos')) || [];

const todos = populateTodos();

const createTodo = (
  title,
  description,
  dueDate,
  priority,
  category = 'default'
) => ({ title, description, dueDate, priority, category });

export const addTodo = (
  title,
  description,
  dueDate,
  priority,
  category = 'default'
) => {
  todos.push(createTodo(title, description, dueDate, priority, category));
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const getAllTodos = () => todos;
