// 所有类型
function getType(obj) {
	const str = Object.prototype.toString.call(obj)
	return str.match(/\w+/g)[1].toLowerCase()
}
