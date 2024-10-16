const todos = [];

const createTodo = (
  title,
  description,
  dueDate,
  priority,
  category = 'default'
) => {
  return { title, description, dueDate, priority, category };
};

export const addTodo = (title, description, dueDate, priority, category) => {
  if (!category) {
    category = 'default';
  }
  const newTodo = createTodo(title, description, dueDate, priority, category);
  todos.push(newTodo);
};

export const getAllTodos = () => todos;
