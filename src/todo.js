const todoLists = [];

const createTodo = (title, description, dueDate, priority) => {
  return { title, description, dueDate, priority };
};

const createTodoList = (listName = 'default') => {
  return { listName, todos: [] };
};

export const addTodoList = (listName = 'default') => {
  let todoList = todoLists.find(
    (list) => list.listName.toLowerCase() === listName.toLowerCase()
  );

  if (!todoList) {
    todoList = createTodoList(listName.toLowerCase());
    todoLists.push(todoList);
  }
};

export const addTodo = (
  title,
  description,
  dueDate,
  priority,
  listName = 'default'
) => {
  let todoList = todoLists.find(
    (list) => list.listName.toLowerCase() === listName.toLowerCase()
  );

  if (!todoList) {
    todoList = createTodoList(listName.toLowerCase());
    todoLists.push(todoList);
  }

  const newTodo = createTodo(title, description, dueDate, priority);
  todoList.todos.push(newTodo);
};

export const getTodosFromList = (listName) => {
  const todoList = todoLists.find((list) => list.listName === listName);
  return todoList ? todoList.todos : [];
};

export const getAllTodoLists = () => todoLists;
