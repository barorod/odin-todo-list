import { createElement } from './utils';

const form = createElement('form', { method: 'POST', action: '/' });

const formFields = [
  { label: 'title', type: 'text', textContent: 'Title' },
  { label: 'description', type: 'textarea', textContent: 'Description' },
  { label: 'date', type: 'datetime-local', textContent: 'Due date' },
  { label: 'priority', type: 'checkbox', textContent: 'Priority' },
  { label: 'list', type: 'text', textContent: 'Categories' },
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

export { form };
