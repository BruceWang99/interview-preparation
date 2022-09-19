function flat(arr) {
	let result = []
	for(let i= 0; i < arr.length; i++) {
		if(arr[i].children) {
			result.push({
				id: arr[i].id,
				name: arr[i].name,
			})
			result = result.concat(flat(arr[i].children))
		} else {
			result.push({
				id: arr[i].id,
				name: arr[i].name,
			})
		}
	}
	return result
}
const data =[
	{
		id: 1,
		name:'test1',
		children:[
			{
				id:11,
				name:'test11', 
				children: [
					{ id:111, name:'test111'},
					{ id:112, name:'test112'},
				],
			}
		],
	},
	{
		id:2,
		name:'test2',
		children:[
			{
				id:21,
				name:'test21'
			}
		],
	},
]
	
console.log(JSON.stringify(flat(data)))/**
*[
{ "id": 111, "name":"test111" }{ "id": 112, "name": "test112" },{ "id": 11, "name":"test11" }.{ "id": 1, "name":"test1" },{ "id": 21, "name":"test21" },{ "id": 2, "name":"test2" }
]
*/
