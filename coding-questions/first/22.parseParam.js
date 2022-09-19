
let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&id=789&city=%E5%8C%97%E4%BA%AC&enabled';
// { user: 'anonymous',
//   id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
//   city: '北京', // 中文需解码
//   enabled: true, // 未指定值得 key 约定为 true
// }
function parseParam(url) {
	let paramStr = /\?(.+)/g.exec(url)[1]
	let result = {}
	paramStr.split('&').forEach((item)=>{
		if(item.indexOf('=') > -1) {
			const [key, value] = item.split('=')
			if(result[key]) {
				if(result[key] instanceof Array) {
					result[key].push(value)
				} else {
					result[key] = [result[key], value]
				}
			} else {
				result[key] = value
			}
		} else {
			result[item] = true
		}
	})
	return result
}

console.log(JSON.stringify(parseParam(url)))
