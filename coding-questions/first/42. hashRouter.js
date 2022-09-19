class HashRouter {
	constructor(routes) {
		this.routes = routes || {}
		window.addEventListener('onload', ()=> {
			console.log('onload');
			this.freshRoute()
		})
		window.addEventListener('hashchange', () => {
			this.freshRoute()
		})
	}
	addRouter(path, callback) {
		this.routes[path] = callback
	}
	freshRoute() {
		const path = location.hash.split('#')[1]
		console.log('path', path);
		this.routes[path]()
	}
}

console.log('asdfa');
let router = new HashRouter({
	'/login': function() {
		console.log('this is login');
	}, 
	'/home': function() {
		console.log('this is home');
	}, 
})
