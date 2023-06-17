require('./index.css');
// console.log('1221');
// import Icon from '../assets/img.jpeg';

import _ from 'lodash';
function component() {
	const element = document.createElement('div');
	element.innerHTML = _.join(['hello', 'webpack'], '');
	element.classList.add('hello');
	// const myIcon = new Image();
	// myIcon.src = Icon;
	// element.appendChild(myIcon);
	return element;
}
document.body.appendChild(component());
