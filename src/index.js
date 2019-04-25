import _ from 'lodash';
import './style.less';

const compontne = ()=>{
  const element = document.createElement('div');
  element.innerHTML = _.join(['<h1 class="header">','Hello','webpack 4 test', ' !','</h1>'], ' ');
  return element;
}

document.body.appendChild(compontne());