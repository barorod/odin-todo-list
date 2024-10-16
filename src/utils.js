export const createElement = (tag, { className = '', ...options }) => {
  const element = document.createElement(tag);

  Object.assign(element, options);

  element.className = className;

  return element;
};

export const timeRemaining = (dateString) => {
  const targetDate = new Date(dateString);
  const now = new Date();

  if (targetDate <= now) {
    return 'Date has already passed';
  }

  const timeDiff = targetDate - now;
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

  let result = [];

  if (days > 0) {
    result.push(`${days} day${days > 1 ? 's' : ''}`);
  }
  if (hours > 0 || (days === 0 && minutes === 0)) {
    result.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
  }
  if (days === 0 && minutes > 0) {
    result.push(`${minutes} minute${minutes !== 1 ? 's' : ''}`);
  }

  return result.join(' and ') + ' remaining';
};
