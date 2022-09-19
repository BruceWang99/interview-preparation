function isCycleObject(obj, map = new WeakMap()) {
	let result = false
	map.set(obj, obj)
	for(let key in obj) {
		if(obj.hasOwnProperty(key) && Object.prototype.toString.call(obj[key]) === '[object Object]') {
			if(map.get(obj[key])) {
				result = true
			} else {
				map.set(obj[key], obj)
			}
			if(!result) {
				result = isCycleObject(obj[key], map)
			}
		}
	}
	return result
}

function isCycleObject2(obj) {
	const map = new WeakMap()
	map.set(obj, obj)
	let list = obj.keys()
	while(list.length) {
		let item = list.shift()
		if(Object.prototype.toString.call(item) === '[object Object]') {
			if(map.get(item)) {
				return true
			} else {
				map.set(item, obj)
			}
			const childs = item.keys()
			list = list.concat(childs)
		}
	}
	return false
}
let p = {
	a: {
		b: {
			c: 1
		}
	}
}
p.a.b.c =p
console.log(isCycleObject({
	c: 1
}))