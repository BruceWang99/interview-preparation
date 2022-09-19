function myNew(Fn, ...arg) {
	if(typeof Fn !== 'function') {
		throw new Error('不是一个构造函数')
	}
	const obj = {}
	Object.setPrototypeOf(obj, Fn.prototype)
	const result = Fn.apply(obj, arg) // 设置新对象的属性和方法, 这里巧用this

	const type = typeof result
	if(result !== null && (type === 'object' || type === 'function') ) { // 构造函数返回是引用类型
		return result
	} else {
		return obj
	}
}
console.log(myNew(function Fn(a, b) {
	this.a = a
	this.b = b
}));
console.log(new function Fn(a, b) {
	this.a = a
	this.b = b
}());