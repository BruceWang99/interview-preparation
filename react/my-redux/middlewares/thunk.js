function thunk (store) {
	return function (next) {
		return function(action) {
			console.log('thunk');
			setTimeout(()=>{
				next(action)
			}, 3000)
		}
	}
}