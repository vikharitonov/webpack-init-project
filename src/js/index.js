import _ from 'lodash';
import '../styles/style.less';
import headerTemplate from '../html/hello.html'
import sectionTemplate from '../html/section.html'

const compontne = ()=>{
  const element = document.createElement('div');
  element.innerHTML = _.join([headerTemplate,sectionTemplate], ' ');
  return element;
}

document.body.appendChild(compontne());