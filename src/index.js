import _ from 'lodash';

const compontne = ()=>{
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello','webpack 4 test', ' !'], ' ');
  return element;
}

document.body.appendChild(compontne());