function flat (arr) {
	let result = []
	arr.forEach(item => {
		if(Array.isArray(item)){
			result = result.concat(flat(item))
		} else {
			result.push(item)
		}
	});
	return result
}
console.log(flat([1, [2, [3, 4, 5]]]));

// ES6 数组拍平
console.log([1, [2, [3, 4, 5]]].flat(Infinity));