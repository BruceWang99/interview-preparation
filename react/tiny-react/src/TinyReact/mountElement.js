import mountNativeElement from './mountNativeElement.js'
import isFunction from './isFunction.js'
import mountComponent from './mountComponent.js'
export default function mountElement(virtualDOM, container, oldDOM) {
	if(isFunction(virtualDOM)) {
		console.log('组件');
		mountComponent(virtualDOM, container, oldDOM)
	} else {
		mountNativeElement(virtualDOM, container, oldDOM)
	}
}