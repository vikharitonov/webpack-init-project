import template from './template.html';
const render = () => {
  const el = document.createElement('nav');
  el.innerHTML = template;
  return el;
};

export default { render };