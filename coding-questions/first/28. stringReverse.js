String.prototype._reverse = function() {
	let result = ''
	for(let i = this.length - 1; i >= 0; i--) {
		result += this[i]
	}
	return result
}

console.log('456'._reverse());