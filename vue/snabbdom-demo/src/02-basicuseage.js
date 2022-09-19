import { init } from "snabbdom/build/package/init.js";
import { h } from "snabbdom/build/package/h.js";
const patch = init([]);


let vnode = h('div#container', [
	h('h1', "hello snabbdom"),
	h('p', "这是一个p")
])
let app = document.getElementById('app')

// 第一个参数是旧的vnode, 可以是DOM元素, 第二个参数是新的vnode, 返回新的vnode

let oldVnode = patch(app, vnode)


setTimeout(() => {
	vnode = h('div#container', [
		h('h1', "hello h1"),
		h('p', "hello p")
	])
	patch(oldVnode, vnode)

	// 清除节点
	patch(oldVnode, h("!"))
}, 2000);