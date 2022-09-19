function createStore (reducer, preloadedState, enhancer) {

	// 约束reducer参数类型
	if(typeof reducer !== 'function') throw new Error('reducer必须是函数')
	// 判断 enhancer 参数有没有传递
	if( typeof enhancer !== 'undefined') {
		// 是否是函数
		if(typeof enhancer !== 'function') {
			throw new Error('enhancer必须是函数')
		}
		return enhancer(createStore)(reducer, preloadedState)
	}
	var currentState = preloadedState;
	var currentListeners = [];

	// 获取状态
	function getState () {
		return currentState;
	}
	// 触发action
	function dispatch (action) {
		// 判断action是否是对象
		if(!isPlainObject(action)) throw new Error('action 必须是对象')
		// 判断对象中是够具有type属性
		if(typeof action.type === 'undefined')  throw new Error('action必须要有type属性')
		currentState = reducer(currentState, action)
		// 循环数组 调用订阅着
		for(var i = 0; i < currentListeners.length; i++) {
			// 获取订阅者
			var listener = currentListeners[i]
			// 调用订阅者
			listener()
		}
	}
	// 订阅状态
	function subscribe (listener) {
		currentListeners.push(listener)
	}

	return {
		getState,
		dispatch,
		subscribe
	}
}


function isPlainObject (obj) {
	// 排除基本数据类型和null
	if(typeof obj !== 'object' || obj === null) return false
	// 区分数组和对象 原型对象对比
	var proto = obj
	while (Object.getPrototypeOf(proto) != null) {
		proto = Object.getPrototypeOf(proto)
	}
	return Object.getPrototypeOf(obj) === proto
}

function applyMiddleware (...middlewares) {
	return function (createStore) {
		return function (reducer, preloadedState) {
			var store = createStore(reducer, preloadedState)
			var middlewareAPI = {
				getState: store.getState,
				dispatch: store.dispatch
			}
			var chain = middlewares.map(middleware=>{
				return middleware(middlewareAPI)
			})
			var _dispatch = compose(...chain)(store.dispatch)
			return {
				...store,
				dispatch: _dispatch
			}
		}
	}
}
function compose (...funcs) {
	return function (dispatch) {
		for(let i = funcs.length -1; i >=0; i--) {
			dispatch = funcs[i](dispatch)
		}
		return dispatch;
	}
}
function bindActionCreators(actionCreators, dispatch) {
	var boundActionCreators = {};
	for(let key in actionCreators) {
		boundActionCreators[key] = function () {
			dispatch(actionCreators[key]())
		}
	}
	return boundActionCreators
}
function combinReducers (reducers) {
	// 检查reducer类型
	var reducerKeys = Object.keys(reducers)
	for (let i = 0; i < reducerKeys.length; i++) {
		let key = reducerKeys[i]
		if(typeof reducers[key] !== 'function') throw new Error('reducer必须是函数')
	}
	// 调用每个reducer, 把每一个小的reducer返回的状态放到一个大的对象中
	return function (state, action) {
		var newState = {}
		for (let i = 0; i < reducerKeys.length; i++) {
			let key = reducerKeys[i]
			let reducer = reducers[key]
			let previousStateForKey = state[key]
			newState[key] = reducer(previousStateForKey, action)
		}
		return newState
	}
}