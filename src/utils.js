export const createElement = (tag, { className, ...options }) => {
  const element = document.createElement(tag);

  Object.assign(element, options);

  element.className = className;

  return element;
};
