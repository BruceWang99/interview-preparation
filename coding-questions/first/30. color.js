// 通过这个问题来对比几种异步编程方法：红灯 3s 亮一次，绿灯 1s 亮一次，黄灯 2s 亮一次；如何让三个灯不断交替重复亮灯？
function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}
// setTimeout + 递归
function task(wait, color, cb) {
	setTimeout(()=>{
		color === 'red' && (red())
		color === 'green' && (green())
		color === 'yellow' && (yellow())
		cb()
	}, wait)
}
function step () {
	task(1000, 'green', ()=>{
		task(2000, 'yellow', ()=>{
			task(3000, 'red', step)
		})	
	})
}
// step()

// promise

function task1(wait, color) {
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			color === 'red' && (red())
			color === 'green' && (green())
			color === 'yellow' && (yellow())
			resolve()
		}, wait)
	})
	
}
function step1() {
	task1(1000, 'green')
	.then(()=>task1(2000, 'yellow'))
	.then(()=>task1(3000, 'red'))
	.then(()=>step1())
}
// step1()
// 用 async/await 实现
function task2(wait, color) {
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			color === 'red' && (red())
			color === 'green' && (green())
			color === 'yellow' && (yellow())
			resolve()
		}, wait)
	})
	
}
async function step2() {
	await task2(1000, 'green')
	await task2(2000, 'yellow')
	await task2(3000, 'red')
	step2()
}
step2()