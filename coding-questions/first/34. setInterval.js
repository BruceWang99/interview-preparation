function interval (fn, wait) {
	(function iv () {
		let timer = setTimeout(()=> {
			fn()
			iv()
			clearTimeout(timer)
			timer = null
		}, wait);
	})()	
}


interval(()=> {
	console.log('asfasf');
},1000)