

class InputNumber extands React.Component {
	constructor(props) {
		super(props);
		this.state = { value: this.props.defaultValue};
		
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({
			value:e.target.value
		})
	}
	render() {
		return {
			<label>
				<input type='text' value={this.state.value} onChange={this.handleChange} />
			</label>
		}
	}
}

class InputNumber extands React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return {
			<label>
				<input type='text' ref={input=>this.textInput=input} />
			</label>
		}
	}
}