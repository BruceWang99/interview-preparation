//  字符串出现的不重复最长长度
// 贪心算法
function lengthOfLongestSubstring(str) {
	let maxLen = 0 // 不重复最长长度
	let index = 0 // 索引
	
	let len = 0 // 一次不重复的长度
	let arr = [] // 记录历史的字符
	while(index <= (str.length - 1)) {
		if(arr.indexOf(str[index]) > -1) {
			maxLen = Math.max(maxLen, len)
			arr = []
			len = 0
		}

		arr.push(str[index])
		len++
		index++
	}
	return maxLen
}

console.log(lengthOfLongestSubstring('1231234567891023456'));