// 递归
function fibonacci(n) {
	if(n === 1 || n === 2) {
		return  1
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2)
	}
}
console.log(fibonacci(6));

// 循环
function fibonacci2(n) {
	let result = 0
	let list = []
	for(let i = 1; i <= n; i++) {
		if(i === 1 || i === 2){
			list[i-1] = 1
		} else {
			list[i-1] = list[i-2] + list[i-3]
		}
		result = list[i-1]
	}
	return result
}
console.log(fibonacci2(6));
