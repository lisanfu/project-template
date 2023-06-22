// require('./index.css');
import(/* webpackPrefetch: true*/ './another-module.js');
// console.log('1221');
// import Icon from '../assets/img.jpeg';
// import dataXml from './data.xml';
// import dataCsv from './data.csv';
// import _ from 'lodash';
// function component() {
// 	const element = document.createElement('div');
// 	element.innerHTML = _.join(['hello', 'webpack --watch'], '');
// 	element.classList.add('hello');
// 	// const myIcon = new Image();
// 	// myIcon.src = Icon;
// 	// element.appendChild(myIcon);
// 	// console.log(dataCsv);
// 	// console.log(dataXml);
// 	return element;
// }
// document.body.appendChild(component());

// function getComponent() {
// 	return import('lodash').then(({ default: _ }) => {
// 		const element = document.createElement('div');
// 		element.innerHTML = _.join(['hello webpack'], '');
// 		return element;
// 	});
// }

async function getComponent() {
	const element = document.createElement('div');
	const { default: _ } = await import('lodash');
	element.innerHTML = _.join(['hello', 'webpack'], '');
	return element;
}

getComponent().then(component => {
	document.body.appendChild(component);
});
