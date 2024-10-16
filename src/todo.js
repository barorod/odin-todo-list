const todoLists = [];

const createTodo = (title, description, dueDate, priority) => {
  return { title, description, dueDate, priority };
};

const createTodoList = (listName = 'default') => {
  return { listName, todos: [] };
};

export const addTodoList = (listName = 'default') => {
  let todoList = todoLists.find((list) => list.listName === listName);

  if (!todoList) {
    todoList = createTodoList(listName);
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
  const todoList = todoLists.find((list) => list.listName === listName);

  if (todoList) {
    const newTodo = createTodo(title, description, dueDate, priority);
    todoList.todos.push(newTodo);
  } else {
    console.log(`Todo list "${listName}" not found.`);
  }
};

export const getTodosFromList = (listName) => {
  const todoList = todoLists.find((list) => list.listName === listName);
  return todoList ? todoList.todos : [];
};

export const getAllTodoLists = () => todoLists;
