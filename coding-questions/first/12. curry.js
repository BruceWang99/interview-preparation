function curry(fn, ...args) {
	let length = fn.length
	args = args || []
	return function() {
		const params = [...args, ...arguments]
		if(length <= params.length) {
			return fn(...params)
		} else {
			return curry(fn, ...params)
		}
	}
}

function curry2 (fn, ...args) {
	args = args || []
	return fn.length <= args.length ? fn(...args) : curry2.bind(null, fn, ...args)
}
function test(a, b, c) {
	return a + b +c
}
const test2 = curry(test)
const o = {
	d: 888,
	aa: test2
}
console.log(o.aa(1)(2)(3))