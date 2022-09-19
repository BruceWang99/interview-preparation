// vue2
let proxyObj = {}
let obj = {
	text: '111'
}
const input = document.createElement('input')
const span = document.createElement('span')

// Object.defineProperty(proxyObj, 'text', {
// 	configurable: true,
// 	enumerable: true,
// 	get() {
// 		console.log('get');
// 		return obj['text']
// 	},
// 	set(val) {
// 		if(obj['text'] === val) return
// 		console.log('set');
// 		obj['text'] = val
// 		span.innerHTML = val
// 	}
// })

// vue3 
proxyObj = new Proxy(obj, {
	get(target, key) {
		return Reflect.get(target, key)
	},
	set(target, key, value, receiver) {
		console.log(target, key, value, receiver)
		if(obj[key] === value) return
		Reflect.set(target, key, value, receiver)
		span.innerHTML = value
	}
})
input.value = obj.text
span.innerHTML = obj.text
input.type = 'text'
input.oninput = function (e) {
	console.log(e);
	proxyObj.text = e.target.value
}
document.getElementsByTagName('body')[0].appendChild(input)
document.getElementsByTagName('body')[0].appendChild(span)