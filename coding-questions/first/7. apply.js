Function.prototype.myApply = function(context, arr) {
	if(typeof this !== 'function') {
		throw new Error('不是一个函数')
	}
	context.fn = this
	let result = context.fn(...arr)
	Reflect.deleteProperty(context, 'fn')
	return result
}

const obj = {
	a: 'hello'
}
function Test(b) {
	console.log(this.a, b);
	return 3
}
console.log(Test.apply(obj, ['b']));
console.log(Test.apply(obj, ['b']));