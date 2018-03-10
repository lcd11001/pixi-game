// https://webpack.js.org/guides/

import _ from 'lodash';
import './style.css';
import Icon from './pixi_icon.png';
import Data from './data.xml';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div
  var myIcon = new Image();
  myIcon.src = Icon;
  myIcon.style.width = '50%';
  myIcon.style.height = 'auto';

  element.appendChild(myIcon);

  var btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console';
  btn.addEventListener('click', function() {
    printMe(Data);
  });

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
