function uniqueArray(arr) {
	let result = []
	const map = new Map()
	for (let item of arr) {
		if(map.get(item)) {
			continue
		} else {
			result.push(item)
			map.set(item, 1)
		}
	}
	return result
}

console.log(uniqueArray([1,1,1,1,2,2,2,2,3]))

// ES6
// [...new Set(arr)]