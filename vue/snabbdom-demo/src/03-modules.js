import { init } from "snabbdom/build/package/init.js";
import { h } from "snabbdom/build/package/h.js";

// 导入模块
import { styleModule } from "snabbdom/build/package/modules/style"; 
import { eventListenersModule } from "snabbdom/build/package/modules/eventlisteners";

// 注册模块
const patch = init([
	styleModule,
	eventListenersModule
]);

let vnode = h('div', [
	h('h1', {
		style: {
			backgroundColor: 'red'
		}
	}, 'hello world'),
	h('p', {
		on: {
			click: eventHandler
		}
	}, 'this is p')
])
function eventHandler() {
	console.log('戳戳戳');
}