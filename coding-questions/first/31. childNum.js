// 有30个小孩儿，编号从1-30，围成一圈依此报数，1、2、3 数到 3 的小孩儿退出这个圈， 然后下一个小孩 重新报数 1、2、3，问最后剩下的那个小孩儿的编号是多少?
function childNum(num, count){
	let childs = []
	for(let i = 0; i < num; i++) {
		childs[i] = i + 1
	}
	let counter = 0 // 报数
	let currentIndex = 0 // 当前索引
	let exitCount = 0 // 退出了多少人
	// 当只剩一个人时, 退出
	while(exitCount < (num - 1)) {
		if(childs[currentIndex] != 0) { //这个人是在的
			counter++
			// 报3时 退出
			if(counter === count) {
				childs[currentIndex] = 0 // 0 表示退出
				exitCount++
				// 重置报数
				counter = 0
			}
		}

		// 下一个人报数
		currentIndex++
		if(currentIndex === childs.length) { // 一圈转完了, 从 0 开始转
			currentIndex = 0
		}
		
	}
	for(let j = 0; j < num; j++) {
		if(childs[j] !== 0) {
			return childs[j]
		}
	}
}

console.log(childNum(30, 3));