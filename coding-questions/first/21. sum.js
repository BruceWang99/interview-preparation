// ES5：

function sum() {
	let result = 0
	Array.prototype.slice.call(arguments).forEach(item => {
		result+=item
	});
	return result
}
console.log(sum(1,2,3));

// ES6
const sum2 = (...arg) => arg.reduce((pre, current) =>(pre + current), 0)

console.log(sum2(1,2,3));
