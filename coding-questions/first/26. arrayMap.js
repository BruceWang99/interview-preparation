
Array.prototype.map = function(fn) {
	for(let i = 0; i < this.length; i++) {
		this[i] = fn(this[i], i, this)
	}
	return this
}


console.log(JSON.stringify([1,2,3,4].map((item, index) => {
	return {
		[index]: item
	}
})));