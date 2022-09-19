function myInstanceof(target, Fn) {
	if(isOriginType(target)) return false
	if(isOriginType(Fn)) {
		throw new Error('不是一个构造函数')
	}
	let targetProto = Object.getPrototypeOf(target)
	const fnProto = Fn.prototype
	while (true) {
		if(fnProto === null) return false
		if(targetProto === fnProto) return true

		targetProto = Object.getPrototypeOf(targetProto)
	}
	return true
}
const isOriginType = (value) => (['null', 'undefined', 'boolean', 'string', 'number', 'symbol', 'bigint'].includes(typeof value) || value === null)
  
// test
console.log('myInstanceof 和instanceOf: ', myInstanceof([], Object), [] instanceof Object)
console.log('myInstanceof 和instanceOf: ', myInstanceof({}, Object), {} instanceof Object)
console.log('myInstanceof 和instanceOf: ', myInstanceof(function (params) {}, Object), function (params) {} instanceof Object)
console.log('myInstanceof 和instanceOf: ', myInstanceof(new Map(), Object), new Map() instanceof Object)
console.log('myInstanceof 和instanceOf: ', myInstanceof(new Set(), Object), new Set() instanceof Object)
console.log('myInstanceof 和instanceOf: ', myInstanceof(1, Object), 1 instanceof Object)
console.log('myInstanceof 和instanceOf: ', myInstanceof('str', Object), 'str' instanceof Object)
console.log('myInstanceof 和instanceOf: ', myInstanceof(true, Object), true instanceof Object)
console.log('myInstanceof 和instanceOf: ', myInstanceof(Symbol(1), Object), Symbol(1) instanceof Object)
console.log('myInstanceof 和instanceOf: ', myInstanceof(BigInt(11111111111111111), Object), BigInt(11111111111111111) instanceof Object)
console.log('myInstanceof 和instanceOf: ', myInstanceof(null, Object), null instanceof Object)
console.log('myInstanceof 和instanceOf: ', myInstanceof(undefined, Object), undefined instanceof Object)
console.log('myInstanceof 和instanceOf: ', myInstanceof(undefined, 1), undefined instanceof 1)
