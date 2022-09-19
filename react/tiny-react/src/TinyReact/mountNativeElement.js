import createDOMElement from './createDOMElement'
import unmountNode from './unmountNode'
export default function mountNativeElement(virtualDOM, container, oldDOM) {
	const dom = createDOMElement(virtualDOM)
	if (oldDOM) {
		container.insertBefore(dom, oldDOM)
	} else {
		// 插入页面
		container.appendChild(dom)
	}
	
	// 判断旧的dom存在 delete
	if (oldDOM) {
		unmountNode(oldDOM)
	}

	
	let component = virtualDOM.component
	if(component) {
		component.setDOM(dom)
	}
}