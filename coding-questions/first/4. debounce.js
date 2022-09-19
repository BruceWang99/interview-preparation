// 定时器
// getTime()
// leading: 延迟前执行
// trailing: 延迟后执行
export function debounce(cb, wait = 0,  options = {}) {
	const { leading = false, trailing = true } = options
	let timer = null
	let execute = true
	return function (...arg) {
		if(leading && execute) {
			cb.apply(this, arg)
			execute = false
		}
		if(timer) {
			clearTimeout(timer)
			timer = null
		}
		timer = setTimeout(()=> {
			if(trailing) {
				cb.apply(this, arg)
			}
			execute = true
		}, wait)
		
			
	}
}