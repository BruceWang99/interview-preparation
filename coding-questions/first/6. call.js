Function.prototype.myCall = function(context, ...arg){
	if(typeof this !== 'function') {
		throw new Error('一定要是function')
	}

	context = context || window
	context.fn = this
	let result = context.fn(...arg)
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
console.log(Test.call(obj, 'b'));
console.log(Test.myCall(obj, 'b'));