function formatNumber(num) {
	let [integer, decimals = ''] = num.toString().split('.')
	if(integer.length > 3) {
		const isZero = integer.length % 3
		if(isZero) {
			integer = integer.slice(0, isZero) + ',' + integer.slice(isZero).match(/\d{3}/g).join(',')
		} else {
			integer = integer.match(/\d{3}/g).join(',')
		}
		// integer = integer.replace(/(?=(?!^)(\d{3})+$)/g, ',')
	}
	return decimals ? `${integer}.${decimals}` : integer
}
console.log('formatNumber', formatNumber(12345.9897));