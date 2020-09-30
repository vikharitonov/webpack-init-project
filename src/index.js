import './styles/general.less';
import template from './template.hbs';

export const app = {
  getAppElement() {
    const appElement = document.getElementById("app");
    appElement.innerHTML = template({ header: 'test' });
  }
}

app.getAppElement();
