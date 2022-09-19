// 手写 Object.create 
// 传入的是原型
// 返回一个新对象
function createObj(proto) {
	function F () {}
	F.prototype = proto
	return new F()
}