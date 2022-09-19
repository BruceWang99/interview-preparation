function promiseAll(list) {
	if(!Array.isArray(list)) {
		throw new Error('传入的必须是一个数组')
	}
	return new Promise((resolve, reject)=>{
		let count = 0
		let result = []
		for(let i = 0; i < list.length; i++){
			if(!(list[i] instanceof Promise)) { // 处理不是Promise情况
				list[i] = Promise.resolve(list[i])
			}
			list[i].then((res)=>{
				result[i] = res
				count++
				if(count === list.length) {
					resolve(result)
				}
			}, (err)=>{
				reject(err)
			})
		}
	})
}
function promiseRace(list) {
	if(!Array.isArray(list)) {
		throw new Error('传入的必须是一个数组')
	}
	return new Promise((resolve, reject)=>{
		for(let i = 0; i < list.length; i++){
			if(!(list[i] instanceof Promise)) { // 处理不是Promise情况
				list[i] = Promise.resolve(list[i])
			}
			list[i].then(resolve, reject)
		}
	})
}
// promise 手写then思路:
// 1. then回调能多次调用, 注册多个回调 - 用回调数组解决
// 2. then能链式调用: 返回的是一个Promise
//  2.1 回调函数有返回值
//  2.2.1 处理回调返回Promise
//  2.2.2 处理回调返回Promise是他自己的情况(循环调用) 
//  2.2 回调函数没有返回值
//  2.3 then没传参数, 给个默认值
// 3. 错误捕获 (try catch)
class MyPromise {
	constructor(executor) {
		this.status = 'pending'
		this.result = null
		this.fulfilledCallbacks = []
		this.rejectedCallbacks = []
		executor(this.resolve, this.reject)
	}
	resolve = (value) => {
		this.status = 'fulfilled'
		this.result = value
		while (this.fulfilledCallbacks.length) {
			this.fulfilledCallbacks.shift()()
		}
	}
	reject = (error) => {
		this.status = 'rejected'
		this.result = error
		while (this.rejectedCallbacks.length) {
			this.rejectedCallbacks.shift()()
		}
	}
	then = (successCb = v=>v, failCb = v=> {throw v}) => {
		const promise = new MyPromise((resolve, reject)=>{
			if(this.status === 'fulfilled') {
				setTimeout(() => {
					resolvePromise(promise, successCb, this.result, resolve, reject)
				}, 0);
			} else if(this.status === 'rejected') {
				setTimeout(() => {
					resolvePromise(promise, failCb, this.result, resolve, reject)
				}, 0);
			} else if(this.status === 'pending') {
				this.fulfilledCallbacks.push(() => {
					resolvePromise(promise, successCb, this.result, resolve, reject)
				})
				this.rejectedCallbacks.push(() => {
					resolvePromise(promise, failCb, this.result, resolve, reject)
				}) 
			}
		})
		return promise
	}
}
function  resolvePromise(promise, cb, result, resolve, reject) {
	    let data = null
		try {
			data = cb(result)
		} catch (error) {
			reject(error)
		}
		if(promise === data) {
			throw TypeError('then不能自己调用自己')
			return
		}
		if(data instanceof MyPromise) {
			data.then(resolve, reject)
		} else {
			resolve(data)
		}
	
}

// 链式调用
// new MyPromise((resolve, reject)=> {
// 	console.log(1);
// 	resolve(1)
// }).then((res) => {
// 	console.log(2);
// }, (error) => {

// }).then((res) => {
// 	console.log(3);
// }, (error) => {
	
// })

// 链式调用 回调结果是Promise并且是他自己的情况
// var promise = new MyPromise(function(resolve, reject){
// 	console.log(1);
// 	setTimeout(() => {
// 		resolve(1)
// 	}, 2000)
// })
// var p1 = promise.then(function(res){
// 	console.log('res1', res);
// 	return p1
// })

// 处理then多次调用的情况
// let p = new MyPromise((resolve, reject)=> {
// 	console.log(1);
// 	setTimeout(() => {
// 		resolve(1)
// 	})
// })
// p.then((res) => {
// 	console.log('res', res);
// })

// p.then((res) => {
// 	console.log('res2', res);
// })

// p.then((res) => {
// 	console.log('res3', res);
// })

// p.then((res) => {
// 	console.log('res4', res);
// })

// then没传参数
// new MyPromise((resolve, reject)=> {
// 	console.log(1);
// 	setTimeout(() => {
// 		reject(new Error('cuole'))
// 	})
// }).then().then().then(res=>{
// 	console.log('res', res);
// }, err=> {
// 	console.log('err', err);
// })