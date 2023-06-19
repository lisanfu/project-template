// import print from './print';
async function getComponent() {
	const element = document.createElement('div');
	const { default: _ } = await import('lodash');
	element.innerHTML = _.join(['hello', 'dynamic-import'], '');
	// element.onclick = print.bind(null, 'hello webpack');
	return element;
}

getComponent().then(component => {
	document.body.appendChild(component);
});
