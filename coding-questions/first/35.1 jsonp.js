function handleCb(res) {
	console.log('这是script回调', res);
}

function jsonp(src) {
	console.log('jsonp');
	const script = document.createElement('script')
	script.src = src
	document.getElementsByTagName('body')[0].appendChild(script)
}
jsonp('http://127.0.0.1:3000/a.js?callback=handleCb')
