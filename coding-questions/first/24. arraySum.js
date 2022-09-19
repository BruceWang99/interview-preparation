function sum(arr) {
	return arr.reduce((pre, current) => (pre + current), 0)
}
function sum2(arr) {
	let array = [...arr]
	let result = 0
	while(array.length) {
		result = result + array.pop()
	}
	return result
}
console.log(sum2([1,2,3,4,5,56,6]));