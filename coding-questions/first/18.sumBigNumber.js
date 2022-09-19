// function sumBigNumber(a, b) {
// 	if(typeof a !== 'number' || typeof b !== 'number') {
// 		throw new Error('参数必须是number')
// 	}
//     let res = ''
// 	let temp = 0
// 	// 转化数组
// 	a = (''+a).split('')
// 	b = (''+b).split('')
// 	// 模拟逢+进1
// 	while(a.length || b.length || temp) {
// 		// 模拟低位相加
// 		temp = temp + ~~a.pop() + ~~b.pop()
// 		// 取余 算出低位数只
// 		res = temp % 10 + res
// 		temp = temp > 9
// 	}
// 	res = res.replace(/^0/g, '')
// 	return res
// }
// a,b 是字符串
function sumBigNumber(a, b) {
	if (isNaN(num1) || isNaN(num2)) return "";
	a = '' + a
	b = '' + b
	let res = ''
	let temp = 0
	a = a.split('')
	b = b.split('')
	while(a.length || b.length || temp) {
		temp = temp + ~~a.pop() + ~~b.pop()
		res = temp % 10 + res
		temp = temp > 9 // true 1
	}
	return res.replace(/^0/, '')
}

console.log(sumBigNumber('119', '339'));