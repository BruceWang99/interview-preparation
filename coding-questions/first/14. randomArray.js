function randomArray(arr) {
	for(let i = 0, len = arr.length; i < len / 2; i++) {
		let randomIndex = Math.round((len - 1 - i) * Math.random())  // 小于最大索引
		randomIndex = Math.random() > 0.5 ? randomIndex + i : randomIndex // 保证索引不是本身
		let flag  = arr[i]
		arr[i] = arr[randomIndex]
		arr[randomIndex] = flag
	}
	return arr
}
console.log(randomArray([1,2,3,4,5,6,7,8]))
