import './styles/general.less';
import template from './template.hbs';

export const app = {
  createAppElement() {
    const appElement = document.createElement("div");
    appElement.id = 'app';
    appElement.innerHTML = template({ header: 'test' });
    return appElement;
  }
}

document.body.appendChild(app.createAppElement());
