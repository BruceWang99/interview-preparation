export default function updateNodeElement(newElement, virtualDOM, oldVirtualDOM = {}) {
	const newProps = virtualDOM.props
	const oldProps = oldVirtualDOM.props || {}
	Object.keys(newProps).forEach(propName => {
		const newPropsValue = newProps[propName]
		const oldPropsValue = oldProps[propName]
		if(newPropsValue !== oldPropsValue) {
			// 事件属性
			if(propName.startsWith("on")) {
				const eventName = propName.toLowerCase().slice(2)
				newElement.addEventListener(eventName, newPropsValue)
				if(oldPropsValue) {
					// 删除原有事件监听
					newElement.removeEventListener(eventName, oldPropsValue)
				}
			} else if (propName === 'value' || propName === 'checked'){
				newElement[propName] = newPropsValue
			} else if(propName !== 'children') {
				if(propName === 'className') {
					newElement.setAttribute('class', newPropsValue)
				} else {
					newElement.setAttribute(propName, newPropsValue)
				}
			}
		}	
	})
	// 属性删除情况
	Object.keys(oldProps).forEach(propName => {
		const newPropsValue = newProps[propName]
		const oldPropsValue = oldProps[propName]
		if(!newPropsValue) {
			// 属性被删除了
			if (propName.startsWith('on')) {
				const eventName = propName.toLowerCase().slice(2)
				newElement.removeEventListener(eventName, oldPropsValue)
			} 
		} else if( propName !== "children") {
			newElement.removeAttribute(propName)
		}
	})
	
}