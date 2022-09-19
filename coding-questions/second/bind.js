Function.prototype.myBind = function(context) {
	if(typeof this !== 'function') {
		throw new Error('不是一个函数')
	}
	context.fn = this
	return function (...argu) {
		return context.fn(...argu)
	}
}
const obj = {
	a: 'hello'
}
function Test(b) {
	console.log(this.a, b);
	return 3
}
console.log(Test.bind(obj)('b'));
console.log(Test.myBind(obj)('b'));