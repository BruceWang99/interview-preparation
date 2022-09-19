Function.prototype.myCall = function (context, ...arr) {
	if(typeof this !== 'function') {
		throw new Error('不是函数')
	}
	context = context || window
	context.fn = this
	const result = context.fn(...arr)
	delete context.fn
	return result
}

const obj = {
	a: 'hello'
}
function Test(b) {
	console.log(this.a, b);
	return 3
}
console.log(Test.call(obj, 'b'));
console.log(Test.myCall(obj, 'b'));