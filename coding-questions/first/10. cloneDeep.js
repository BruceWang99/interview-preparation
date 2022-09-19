// 1. 函数 undefined symbol 不能复制
// 2. ** 循环引用拷贝会报错
// JSON.parse(JSON.stringify(obj))
// https://juejin.cn/post/6844903929705136141

function getType (b) {
	return Object.prototype.toString.call(b)
}
const isObject = function(b) {
	return getType(b) === '[object Object]'
}
const isMap = function(b) {
	return getType(b) === '[object Map]'
}
const isSet = function(b) {
	return getType(b) === '[object Set]'
}
function cloneDeep(obj, map = new WeakMap()) {
	let o = null
	if(obj instanceof Object) { // 引用类型
		if(map.has(obj)) return map.get(obj)
		let cloneObj = null
		o = new obj.constructor()
		map.set(obj, o)  // 解决循环应用 key value 弱引用, value 可随时被垃圾回收
		if(isObject(obj)) {	
			const keys =  Object.keys(obj)
			for (let key of keys) {
				o[key] = cloneDeep(obj[key], map)
			}
			return o
		} else if(Array.isArray(obj)){
			for (let key in obj) {
				o[key] = cloneDeep(obj[key], map)
			}
			return o
		} else if(isMap(obj)) {
			obj.forEach((value, key) => {
				o.set(key, cloneDeep(value), map)	
			});
			return o
		} else if(isSet(obj)) {
			obj.forEach(value => {
				o.add(cloneDeep(value), map)	
			});
			return o
		} else if(typeof obj === 'function') {
			return obj
		} else { // 其他类型
			return obj
		}
	} else { // 原始类型
		return obj
	}
}


const target = {
    field1: 1,
    field2: undefined,
    field3: 'ConardLi',
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    },
	field5: new Map([[1, 2], [3, 4]]),
	field6: new Set('a', 'b', 'c'),
	field7: [1,2,3, {a: 1, b: 2}]
};
target.target = target
console.log(target);
console.log(cloneDeep(target));