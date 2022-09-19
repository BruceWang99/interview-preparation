// 观察者是一种一对多的关系，所有的在同一被观察者身上绑定的观察者只能接受同一个被观察者的消息。
// 只有两个对象, 观察者(多)(订阅者)和被观察者(一)(发布者)

let observedId = 0
let observerId = 0
// 被观察者(发布者)
class Observed {
	constructor() {
		this.id = observedId++
		this.observers = []
	}
	addObserver(ao) {
		if(!(this.observers.filter(o => o === ao).length)) {
			this.observers.push(ao)
		}
	}
	removeObserver(ro) {
		this.observers  = this.observers.filter(o => (o !== ro))
	}
	notify(value) {
		console.log(`${this.id}通知的消息`, value);
		this.observers.forEach(o=> {
			o.update(value)
		})
	}
}
// 观察者(订阅者)
class Observer {
	constructor() {
		this.id = observerId++
	}
	update(value) {
		console.log(`id为:${this.id}的观察者更新了`, value)
	}
}

let observer1 = new Observer()
let observer2 = new Observer()
let observer3 = new Observer()
let observer4 = new Observer()


let observed1 = new Observed()
observed1.addObserver(observer1)
observed1.addObserver(observer2)
observed1.addObserver(observer3)
observed1.addObserver(observer4)

observed1.removeObserver(observer2)


observed1.notify('first')
