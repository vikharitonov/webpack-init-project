import * as _ from 'lodash';
import './styles/style.less';
import * as headerTemplate from './templates/hello.html';
import * as sectionTemplate from './templates/section.html'

export const calc = (x: number, y: number) => {
  return x + y;
}


export const getHtml = () => {
  const element = document.createElement('div');
  element.innerHTML = _.join([headerTemplate, sectionTemplate, `result of calc 2 and 3 is ${calc(2, 3)}`], '');
  return element;
}


document.body.appendChild(getHtml());