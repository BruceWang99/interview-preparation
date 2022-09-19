function multiplyBigNum(num1, num2) {
    //判断输入是不是数字
    if (isNaN(num1) || isNaN(num2)) return "";
    num1 = num1 + ""
    num2 = num2 + ""
    let len1 = num1.length,
        len2 = num2.length;
    let pos = []; // 这个总长度是len1 + len2
   
	for(let j = len2 - 1; j>=0; j--) {
		for(let i = len1 - 1; i >=0; i--) {
			// 十位索引
			let index1 = i + j
			// 个位索引
			let index2 = i + j + 1
            
			// 最后面的数相乘,如果后面个位的数有存值也加上
			let mul = num1[i] * num2[j] + (pos[index2] || 0)

			// 把十位取出来, 再加上原来这一位有的值
			pos[index1] = Math.floor(mul/10) + (pos[index1] || 0)
			// 把个位取出来
			pos[index2] = mul % 10
		}
	}
   

    //去掉前置0
    let result = pos.join("").replace(/^0+/, "");

    return result - 0 || '0';
}



console.log(multiplyBigNum(999, 99));