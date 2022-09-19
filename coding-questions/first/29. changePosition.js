function changePosition(a, b) {
	a = a^b
	b = a^b
	a = a^b
}
let a = 8
let b = 5
// 位运算 异或
a = a^b
b = a^b
a = a^b

// 巧用加减
a = a + b
b = a - b
a = a - b

console.log(a);
console.log(b);