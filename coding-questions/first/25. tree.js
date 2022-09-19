// 转换前：
// source = [{
// 	id: 1,
// 	pid: 0,
// 	name: 'body'
//   }, {
// 	id: 2,
// 	pid: 1,
// 	name: 'title'
//   }, {
// 	id: 3,
// 	pid: 2,
// 	name: 'div'
//   }]
// 转换为: 
// tree = [{
//   id: 1,
//   pid: 0,
//   name: 'body',
//   children: [{
// 	id: 2,
// 	pid: 1,
// 	name: 'title',
// 	children: [{
// 	  id: 3,
// 	  pid: 1,
// 	  name: 'div'
// 	}]
//   }
// }]

const source = [{
	id: 1,
	pid: 0,
	name: 'body'
}, {
	id: 2,
	pid: 1,
	name: 'title'
}, {
	id: 3,
	pid: 2,
	name: 'div'
}]
function jsonToTree(source) {
	let result = []
	// 存储id对应的对象
	let map = {}
	source.forEach(item => {
		map[item.id] = item
	});
	source.forEach(item => {
		const parent = map[item.pid]
		if(parent) {
			!parent.children && (parent.children = [])
			parent.children.push(item)
		} else {
			result.push(item)
		}
	})
	return result
}
console.log(JSON.stringify(jsonToTree(source)))