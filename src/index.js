import './styles/general.less';
import template from './template.hbs';
import Navigation from './PresentationalComponents/Navigation';

export const app = {
  createAppElement() {
    const appElement = document.createElement("div");
    appElement.id = 'app';
    appElement.innerHTML = template({ header: 'test' });
    return appElement;
  }
}

window.onload = () => document.body.appendChild(Navigation.render());
