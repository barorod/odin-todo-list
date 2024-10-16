import { addTodo, getAllTodoLists } from './todo';
import { createElement } from './utils';

const form = createElement('form', { method: 'POST', action: '/' });

const formFields = [
  { label: 'title', type: 'text', textContent: 'Title' },
  { label: 'description', type: 'textarea', textContent: 'Description' },
  { label: 'date', type: 'datetime-local', textContent: 'Due date' },
  { label: 'priority', type: 'checkbox', textContent: 'Priority' },
  { label: 'listName', type: 'text', textContent: 'Categories' },
];

const fields = formFields.map((el) => {
  const divWrapper = createElement('div', { className: `${el.label}Wrapper` });
  const label = createElement('label', {
    className: `${el.label}Label`,
    htmlFor: el.label,
    textContent: el.textContent,
  });
  const input = createElement(el.type === 'textarea' ? 'textarea' : 'input', {
    className: `${el.label}Input`,
    ...(el.type !== 'textarea' && { type: el.type }),
    id: el.label,
    name: el.label,
  });

  divWrapper.append(label, input);
  return divWrapper;
});

const submitBtn = createElement('button', {
  className: 'submitBtn',
  type: 'submit',
  textContent: 'Submit',
});
form.append(...fields, submitBtn);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const title = formData.get('title');
  const description = formData.get('description');
  const date = formData.get('date');
  const priority = formData.get('priority');
  let listName = formData.get('listName');

  if (!title || !description || !date) {
    alert(
      'Please fill out all required fields (Title, Description, and Due date)'
    );
    return;
  }

  if (!listName) {
    listName = 'default';
  }

  addTodo(title, description, date, priority, listName);

  console.log(getAllTodoLists());
});

export { form };
