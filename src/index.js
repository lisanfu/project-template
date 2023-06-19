// require('./index.css');
// console.log('1221');
// import Icon from '../assets/img.jpeg';
// import dataXml from './data.xml';
// import dataCsv from './data.csv';
import _ from 'lodash';
function component() {
	const element = document.createElement('div');
	element.innerHTML = _.join(['hello', 'webpack --watch'], '');
	element.classList.add('hello');
	// const myIcon = new Image();
	// myIcon.src = Icon;
	// element.appendChild(myIcon);
	// console.log(dataCsv);
	// console.log(dataXml);
	return element;
}
document.body.appendChild(component());
