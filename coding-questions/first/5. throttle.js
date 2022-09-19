export function throttle(cb, wait = 0, options = {}) {
	const { leading = true, trailing = true } = options
	let timer = null
	return function(...arg) {
		if(timer) return
		if(leading) {
			cb.apply(this, arg)
		}
		timer = setTimeout(()=> {
			if(trailing) {
				cb.apply(this, arg)
			}
			clearTimeout(timer)
			timer = null
		}, wait)
	}
	
}