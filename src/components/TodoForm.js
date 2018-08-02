import React from 'react';

class TodoForm extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			text: ''
		}
		this.handleChange = (event) => {
	      var text = event.target.value;
	      this.setState({text: text});
	  	}
	}

	render(){
		return (
			<div className="todo-form">
				<input onChange={this.handleChange} value={this.state.text}/>
				<button onClick={() => this.props.add(this.state.text)}>Add</button>
			</div>
		)
	}
}

export default TodoForm;