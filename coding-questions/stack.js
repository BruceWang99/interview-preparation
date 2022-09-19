class Stack {
	constructor() {
	  this.data = new Array()
	}
	getVal() {
	  return this.data
	}
	op(...arr) {
	  if(arr.length > 0) {
		let l = this.data.length
		for (let i = 0; i < arr.length; i++) {
		  this.data[l + i] = arr[i]
		}
	  } else {
		this.data.pop()
	  }
	  return this.getVal()
	}
  }