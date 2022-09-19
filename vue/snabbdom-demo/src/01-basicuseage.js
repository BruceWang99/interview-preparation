import { init } from "snabbdom/build/package/init.js";
import { h } from "snabbdom/build/package/h.js";
const patch = init([]);


let vnode = h('div#container.cls', {
	hook: {
		init (vnode) {
			console.log(vnode);
		},
		create(emptyNode, vnode) {
			console.log(vnode.elm);
		}
	}
}, 'hello')
let app = document.getElementById('app')

// 第一个参数是旧的vnode, 可以是DOM元素, 第二个参数是新的vnode, 返回新的vnode

let oldVnode = patch(app, vnode)


vnode = h('div#container.xxx', "this is new dom")

patch(oldVnode, vnode)