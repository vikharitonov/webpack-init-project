import './styles/general.less';
import template from './template.hbs';
import Navigation from './PresentationalComponents/Navigation';
import Calendar from './PresentationalComponents/Calendar';

export const app = {
  createAppElement() {
    const appElement = document.createElement("div");
    appElement.id = 'app';
    appElement.innerHTML = template({ header: 'test' });
    return appElement;
  }
}

window.onload = () => {
  document.body.appendChild(Navigation.render())
  document.body.appendChild(Calendar.render())
};
