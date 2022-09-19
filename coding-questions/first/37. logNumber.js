// 实现每隔一秒打印 1,2,3,4
function logNum(num) {
	setInterval(()=>{
		let count = 0;
		while(++count <= num) {
			(function() {
				console.log(count)
			})()
		}
	}, 1000)
}
logNum(4)