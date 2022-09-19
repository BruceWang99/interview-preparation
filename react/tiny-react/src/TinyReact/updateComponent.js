import diff from "./diff"

export default function updateComponent(
	virtualDOM, 
	oldComponent, 
	oldDOM, 
	container) {
		// 生命周期 组件将要接收属性
		oldComponent.componentWillReceiveProps(virtualDOM.props)
		// 组件应该被更新
		if(oldComponent.shouldComponentUpdate(virtualDOM.props)) {
			let prevProps = oldComponent.props
			// 生命周期 组件将要更新了
			oldComponent.componentWillUpdate(virtualDOM.props)
			// 组件更新
			oldComponent.updateProps(virtualDOM.props)
			let nextVirtualDOM = oldComponent.render()
			nextVirtualDOM.component = oldComponent
			// 对比差异
			diff(nextVirtualDOM, container, oldDOM)
			oldComponent.componentDidUpdate(prevProps)
		}
		
}