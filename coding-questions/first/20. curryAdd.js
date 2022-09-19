// add(1)(2)(3)
// 1
const add = x => y => z => (x + y + z)
// 2
function add2(x, y, z) {
	return x + y + z
}

function curry (fn, ...argu) {
	const len = fn.length
	return function() {
		if(len === arguments.length + argu.length) {
			return fn.apply(null, [...argu, ...arguments])
		} else {
			return curry(fn, ...[...argu, ...arguments])
		}
	}
}

console.log(add(1)(2)(3))
console.log(curry(add2)(1, 2, 3))