import diff from "./diff";

export default class Component {
	constructor(props) {
		this.props = props
	}
	setState(state) {
		this.state = Object.assign({}, this.state, state)
		// 获取最新的要渲染的virtualDOM 对象
		let virtualDOM = this.render()

		let oldDOM = this.getDOM()
		let container = oldDOM.parentNode
		console.log(oldDOM);

		diff(virtualDOM, container, oldDOM)
	}
	setDOM(dom) {
		this._dom = dom
	}
	getDOM() {
		return this._dom
	}
	updateProps (props) {
		this.props = props
	}

	// 生命周期函数
	componentWillMount() {}
	componentDidMount() {}
	componentWillReceiveProps(nextProps) {}
	shouldComponentUpdate(nextProps, nextState) {
	  return nextProps != this.props || nextState != this.state
	}
	componentWillUpdate(nextProps, nextState) {}
	componentDidUpdate(prevProps, preState) {}
	componentWillUnmount() {}
}