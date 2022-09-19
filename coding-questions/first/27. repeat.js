String.prototype.repeat = function(num) {
	let result = ''
	while(num) {
		result = result + this.toString()
		num --
	}
	return result
}
console.log('123'.repeat(2));