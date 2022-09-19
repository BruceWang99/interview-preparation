// 发布订阅模式实现的是一种多对多的关系，在发布者与订阅者之间需要有一个中介者，发布者发布事件名和参数到中间者，中间者向事件集中的订阅者发送参数。
// 观察者是一种一对多的关系，所有的在同一被观察者身上绑定的观察者只能接受同一个被观察者的消息。
class EventCenter {
	constructor() {
		this.events = {}
	}
	// 注册事件
	on(name, fn) {
		if (this.events[name]) {
			this.events[name].push(fn)
		} else {
			this.events[name] = [fn]
		}
		
	}
	// 移除事件
	remove(name, fn) {
		if (this.events[name]) {
			this.events[name] = this.events[name].filter(f => f !== fn)
		}
	}
	// 触发事件
	emit(name, ...arg) {
		if(this.events[name]){
			this.events[name].forEach(fn => {
				fn(...arg)
			});
		}
	}
}

let eventCenter = new EventCenter()
let test2 = function() {
	console.log('test click2');
}

// 发布者是 'click'事件, 回调函数是订阅者
eventCenter.on('click', function() {
	console.log('test click');
})
// 发布者是 'click'事件, 订阅者是test2
eventCenter.on('click', test2)

// 发布者是 'click'事件, 回调函数是订阅者
eventCenter.on('click', function() {
	console.log('test click3');
})
eventCenter.remove('click', test2)
eventCenter.emit('click')




// 发布者是 'scroll'事件, 回调函数是订阅者 scroll是第二个发布者
eventCenter.on('scroll', function() {
	console.log('test scroll');
})
// 发布者是 'scroll'事件, 回调函数是订阅者
eventCenter.on('scroll', function() {
	console.log('test scroll3');
})
eventCenter.emit('scroll')
